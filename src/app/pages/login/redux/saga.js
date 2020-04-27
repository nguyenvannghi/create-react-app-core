import { put, take, call, fork, all } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie } from 'app/utils/cookieStorage';
import { loginApi } from './api';
import * as nameEvents from './actions';
import * as nameConst from './consts';

function* loginSaga() {
    while (true) {
        const {
            payload: { username, password },
        } = yield take(nameConst.LOGIN_CALL);
        // yield put(loadingOpen());
        const result = yield call(loginApi, username, password);
        if (result && !result.data) {
            yield put(nameEvents.onLoginFailed(result));
        } else {
            if (!isEmpty(result) && !isEmpty(result.data)) {
                const { token } = result.data;
                setCookie(listCookieStorageName.ACCESS_TOKEN, token, 2);
            }
            yield put(nameEvents.onLoginSucceeded(result));
        }
        // yield put(loadingClose());
    }
}

function* logoutSaga() {
    // while (true) {
    //     yield take(nameConst.LOGOUT_CALL);
    //     // Logout
    //     return null;
    // }
}

export default function* root() {
    yield all([fork(loginSaga), fork(logoutSaga)]);
}
