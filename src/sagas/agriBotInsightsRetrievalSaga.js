import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const plantDocURL = "https://plant-doc-plantcv.herokuapp.com/analyze";

function* agriBotInsightsRetrievalAsync(data) {
    try {
        const fieldId = data.input.fieldResId.substring(data.input.fieldResId.lastIndexOf(":")+1)
        const imgURL = "https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg";
        console.log(`agriBot data for ${fieldId}`);
        const plantDocResponse = yield fetch(`${plantDocURL}?raw=true&url=${imgURL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.ok?data:undefined
        })

        if(plantDocResponse){
            yield put({
                type: actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_SUCCESS, message: 'agribot insights received', agriBotInsights: plantDocResponse
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