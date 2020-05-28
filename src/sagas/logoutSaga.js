import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';

function* logoutAsync() {
    try {
        localStorage.setItem('projectkisaanstate', '')
        yield put({
            type: actionTypes.LOGOUT_SUCCESS, message: 'logged out'
        })
    } catch(err) {
        yield put({
            type: actionTypes.LOGIN_FAILURE, error: err
        })
    }
}

export function* logoutWatcher() {
    yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutAsync)
}
