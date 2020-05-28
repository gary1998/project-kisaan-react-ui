import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";
const agroAPIURL = "https://api.agromonitoring.com/agro/1.0";

function* addFieldAsync(data) {
    try {
        const addFieldToAgro = yield fetch(`${agroAPIURL}/polygons?appid=83e9d92cb19c29c0045da2e0282321f5`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.input.data)
        }).then(data => {
            return data.json()
        })
        if (addFieldToAgro.id) {
            let fieldResId = `${data.input.owner}:fields:${addFieldToAgro.id}`;
            let query = `mutation addField($owner: String, $data: FieldInputData, $fieldResId: String){createField(owner: $owner, data: $data, fieldResId: $fieldResId){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}`;
            delete data.input.data.geo_json.features[0].properties
            let variables = { fieldResId: fieldResId, owner: data.input.owner, data: data.input.data };
            const addFieldToDB = yield fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, variables })
            }).then(data => {
                return data.json();
            })
            if (addFieldToDB.data.createField.fieldResId) {
                yield put({
                    type: actionTypes.ADD_FIELD_SUCCESS, message: 'field added', newField: { fieldResId: fieldResId, data: data.input.data }
                })
            }
        } else {
            yield put({
                type: actionTypes.ADD_FIELD_FAILURE, error: 'field not added'
            })
        }
    } catch (err) {
        yield put({
            type: actionTypes.ADD_FIELD_FAILURE, error: err
        })
    }
}

export function* geolocationWatcher() {
    yield takeEvery(actionTypes.ADD_FIELD_REQUEST, addFieldAsync)
}
