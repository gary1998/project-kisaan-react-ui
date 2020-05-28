import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";
const agroAPIURL = "https://api.agromonitoring.com/agro/1.0";

function* deleteFieldAsync(data) {
    try {
        const deleteFieldFromAgro = yield fetch(`${agroAPIURL}/polygons/${data.input.fieldId}?appid=83e9d92cb19c29c0045da2e0282321f5`, {
            method: 'DELETE'
        }).then(data => {
            return data.ok
        })
        if (deleteFieldFromAgro) {
            let query = `mutation deleteField($fieldResId: String){removeField(fieldResId: $fieldResId)}`;
            let fieldResId = `${data.input.owner}:fields:${data.input.fieldId}`;
            let variables = { fieldResId };
            const deleteFieldFromDB = yield fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, variables })
            }).then(data => {
                return data.json();
            })
            if (deleteFieldFromDB.data.removeField) {
                yield put({
                    type: actionTypes.DELETE_FIELD_SUCCESS, message: 'field deleted', removedField: fieldResId
                })
            }
        } else {
            yield put({
                type: actionTypes.DELETE_FIELD_FAILURE, error: 'field not deleted'
            })
        }
    } catch (err) {
        yield put({
            type: actionTypes.DELETE_FIELD_FAILURE, error: err
        })
    }
}

export function* geolocationWatcher() {
    yield takeEvery(actionTypes.DELETE_FIELD_REQUEST, deleteFieldAsync)
}
