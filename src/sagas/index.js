import * as loginSaga from './loginSaga';
import * as logoutSaga from './logoutSaga';
import * as geolocationSaga from './geoLocationSaga';

import * as fieldsRetrievalSaga from './fieldsRetrievalSaga';
import * as fieldAdditionSaga from './fieldAdditionSaga';
import * as fieldDeletionSaga from './fieldDeletionSaga';

import * as cropsRetrievalSaga from './cropsRetrievalSaga';
import * as cropsAdditionSaga from './cropAdditionSaga';
import * as cropDeletionSaga from './cropDeletionSaga';

import * as satelliteInsightsRetrievalSaga from './satelliteInsightsRetrievalSaga';
import * as agriBotInsightsRetrievalSaga from './agriBotInsightsRetrievalSaga';

import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...Object.values(loginSaga),
        ...Object.values(logoutSaga),
        ...Object.values(geolocationSaga),
        ...Object.values(fieldsRetrievalSaga),
        ...Object.values(fieldAdditionSaga),
        ...Object.values(fieldDeletionSaga),
        ...Object.values(cropsRetrievalSaga),
        ...Object.values(cropsAdditionSaga),
        ...Object.values(cropDeletionSaga),
        ...Object.values(satelliteInsightsRetrievalSaga),
        ...Object.values(agriBotInsightsRetrievalSaga)
    ].map(fork))
}