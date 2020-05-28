import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const agroAPIURL = "https://api.agromonitoring.com/agro/1.0";

function* satelliteInsightsRetrievalAsync(data) {
    try {
        const fieldId = data.input.fieldResId.substring(data.input.fieldResId.lastIndexOf(":")+1)
        const satelliteInsights = {}
        
        const weatherData = yield fetch(`${agroAPIURL}/weather?polyid=${fieldId}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.json()
        })
        satelliteInsights.weatherData = weatherData;

        const forecastWeatherData = yield fetch(`${agroAPIURL}/weather/forecast?polyid=${fieldId}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.json()
        })
        satelliteInsights.forecastWeatherData = forecastWeatherData;

        const soilData = yield fetch(`${agroAPIURL}/soil?polyid=${fieldId}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async data => {
            return data.json()
        })
        satelliteInsights.soilData = soilData;

        const uviData = yield fetch(`${agroAPIURL}/uvi?polyid=${fieldId}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async data => {
            return data.json()
        })
        satelliteInsights.uviData = uviData;

        const satelliteImageryData = yield fetch(`${agroAPIURL}/image/search?start=0&end=1&polyid=${fieldId}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async data => {
            return data.json()
        })
        satelliteInsights.satelliteImageryData = satelliteImageryData;

        const ndviStats = yield fetch(`${satelliteImageryData[satelliteImageryData.length-1].stats.ndvi.replace("http://", "https://")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async data => {
           return data.json()
        })
        satelliteInsights.ndviStatsData = ndviStats;

        const eviStats = yield fetch(`${satelliteImageryData[satelliteImageryData.length-1].stats.evi2.replace("http://", "https://")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async data => {
           return data.json()
        })
        satelliteInsights.eviStatsData = eviStats;

        yield put({
            type: actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_SUCCESS, message: 'satellite insights received', satelliteInsights: satelliteInsights
        })        

    } catch (err) {
        yield put({
            type: actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_FAILURE, error: err
        })
    }
}

export function* fieldDataRetrievalWatcher() {
    yield takeEvery(actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_REQUEST, satelliteInsightsRetrievalAsync)
}