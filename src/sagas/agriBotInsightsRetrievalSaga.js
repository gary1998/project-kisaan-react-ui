import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const plantDocURL = "https://plant-doc-plantcv.herokuapp.com/analyze";

function* agriBotInsightsRetrievalAsync(data) {
    try {
        const agriBotInsights = {}
        agriBotInsights.envData = {
            "temp": 23.7,
            "humidity": 52,
            "pressure": 23
        }

        agriBotInsights.soilData = {
            "moisture": 0.75,
            "temp": 25.3,
            "fertility": {
                "n": "medium",
                "p": "low",
                "k": "high"
            }
        }
        const fieldId = data.input.fieldResId.substring(data.input.fieldResId.lastIndexOf(":")+1)
        const imgURL = data.input.img;
        const plantDocResponse = yield fetch(`${plantDocURL}?raw=true&url=${imgURL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.ok?data.json():undefined
        })
        agriBotInsights.plantDocData = plantDocResponse;

        if(agriBotInsights){
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