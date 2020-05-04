import { createReducer } from '@reduxjs/toolkit';
import * as nameActs from './actions';
import { FIELDS_STATE } from './consts';

export const initState = {
    [FIELDS_STATE.SIDEBAR_TOGGLE]: true,
};

const userReducer = createReducer(initState, {
    [nameActs.onLoginCall]: state => {
        state[FIELDS_STATE.LOADING] = true;
    },
    [nameActs.onLoginSucceeded]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.USER_INFO] = payload;
        state[FIELDS_STATE.LOADING] = false;
    },
    [nameActs.onLoginFailed]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.USER_INFO] = FIELDS_STATE.USER_INFO;
        state[FIELDS_STATE.ERROR] = payload;
        state[FIELDS_STATE.LOADING] = false;
    },
});

export default userReducer;
