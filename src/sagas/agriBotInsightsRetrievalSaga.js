import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';

function* agriBotInsightsRetrievalAsync(data) {
    try {
        const agriBotInsights = {}
        const deviceResponse = yield fetch(`https://agribot-7dadf.firebaseio.com/event/hardware.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.ok ? data.json() : undefined
        })

        agriBotInsights.deviceResponse = deviceResponse;

        if (agriBotInsights) {
            yield put({
                type: actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_SUCCESS, message: 'agribot insights received', agriBotInsights: agriBotInsights
            })
        } else {
            yield put({
                type: actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_FAILURE, error: 'agribot insights not received'
            })
        }

    } catch (err) {
        yield put({
            type: actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_FAILURE, error: err
        })
    }
}

export function* agriBotDataRetrievalWatcher() {
    yield takeEvery(actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_REQUEST, agriBotInsightsRetrievalAsync)
}