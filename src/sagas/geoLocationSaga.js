import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from '../constants';

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error),
        { enableHighAccuracy: true }
    )
})

function* geolocationAsync() {
    try {
        const location = yield call(getUserLocation)
        if (location) {
            yield put({
                type: actionTypes.GEOLOCATION_RETRIEVAL_SUCCESS, message: 'received geolocation', geolocation: [location.coords.latitude, location.coords.longitude]
            })
        } else {
            yield put({
                type: actionTypes.GEOLOCATION_RETRIEVAL_FAILURE, error: 'geolocation not received'
            })
        }
    } catch (err) {
        yield put({
            type: actionTypes.GEOLOCATION_RETRIEVAL_FAILURE, error: err
        })
    }
}

export function* geolocationWatcher() {
    yield takeEvery(actionTypes.GEOLOCATION_RETRIEVAL_REQUEST, geolocationAsync)
}
