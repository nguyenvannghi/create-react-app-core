import { createReducer } from '@reduxjs/toolkit';
import * as nameActs from './actions';
import { FIELDS_STATE } from './consts';

export const initState = {
    [FIELDS_STATE.SIDEBAR_TOGGLE]: true,
};

const commonReducer = createReducer(initState, {
    [nameActs.onSidebarToggle]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.SIDEBAR_TOGGLE] = payload;
    },
});

export default commonReducer;
