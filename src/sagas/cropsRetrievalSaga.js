import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";

function* cropsRetrievalAsync(data) {
    try {
        let query = `query crops($email: String){crops(email: $email){cropId name cropResId}}`;
        let variables = data.input;
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
            type: actionTypes.CROPS_RETRIEVAL_SUCCESS, message: 'received crops', crops: resp.data.crops
        })
    } catch(err) {
        yield put({
            type: actionTypes.CROPS_RETRIEVAL_FAILURE, error: err
        })
    }
}

export function* fieldsRetrievalWatcher() {
    yield takeEvery(actionTypes.CROPS_RETRIEVAL_REQUEST, cropsRetrievalAsync)
}