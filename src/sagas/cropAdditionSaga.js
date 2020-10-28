import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://agribot-7dadf.firebaseio.com/users";

function* cropAdditionAsync(data) {
    try {
        let url = `${serverURL}/${data.input.owner}/crops`;
        let cropResId = `${data.input.owner}:crops:${data.input.cropId}`;
        let variables = { cropId: data.input.cropId, name: data.input.name, owner: data.input.owner, cropResId };
        let resp = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(variables)
        }).then(data => {
            return data.json();
        });
        if (resp.data.createCrop.cropId){
            yield put({
                type: actionTypes.ADD_CROP_SUCCESS, message: 'added crop', newCrop: { cropId: data.input.cropId, name: data.input.name }
            })
        } else {
            yield put({
                type: actionTypes.ADD_CROP_FAILURE, error: 'can\'t add new crop'
            })
        }
    } catch (err) {
        yield put({
            type: actionTypes.ADD_CROP_FAILURE, error: err
        })
    }
}

export function* cropAdditionWatcher() {
    yield takeEvery(actionTypes.ADD_CROP_REQUEST, cropAdditionAsync)
}