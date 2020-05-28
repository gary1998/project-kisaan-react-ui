import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";

function* fieldsRetrievalAsync(data) {
    try {
        let query = `query fields($email: String){fields(email: $email){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}`;
        let variables = {email: data.input.email};
        let resp = yield fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        });
        yield put({
            type: actionTypes.FIELDS_RETRIEVAL_SUCCESS, message: 'received fields', fields: resp.data.fields
        })
    } catch(err) {
        yield put({
            type: actionTypes.FIELDS_RETRIEVAL_FAILURE, error: err
        })
    }
}

export function* fieldsRetrievalWatcher() {
    yield takeEvery(actionTypes.FIELDS_RETRIEVAL_REQUEST, fieldsRetrievalAsync)
}