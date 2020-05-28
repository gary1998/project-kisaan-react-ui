import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";

function* loginAsync(data) {
    try {
        let query = `query login($email: String, $password: String){login(email: $email, password: $password){name photo email}}`;
        let variables = {email: data.input.email, password: data.input.password};
        let resp = yield fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        });
        if (!resp.data.login){
            yield put({
                type: actionTypes.LOGIN_FAILURE, error: 'invalid credentials'
            })
        } else {
            yield put({
                type: actionTypes.LOGIN_SUCCESS, message: 'logged in', user: resp.data.login
            })
        }
    } catch(err) {
        yield put({
            type: actionTypes.LOGIN_FAILURE, error: err
        })
    }
}

export function* loginWatcher() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, loginAsync)
}
