import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";

function* cropDeletionAsync(data) {
    try {
        let query = `mutation deleteCrop($cropResId: String){removeCrop(cropResId: $cropResId)}`;
        let cropResId = `${data.input.owner}:crops:${data.input.cropId}`;
        let variables = { cropResId };
        let resp = yield fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        });
        if (resp.data.removeCrop){
            yield put({
                type: actionTypes.DELETE_CROP_SUCCESS, message: 'deleted crop', removedCrop: data.input.cropId
            })
        } else {
            yield put({
                type: actionTypes.DELETE_CROP_FAILURE, error: 'can\'t delete crop'
            })
        }
    } catch (err) {
        yield put({
            type: actionTypes.DELETE_CROP_FAILURE, error: err
        })
    }
}

export function* cropDeletionWatcher() {
    yield takeEvery(actionTypes.DELETE_CROP_REQUEST, cropDeletionAsync)
}