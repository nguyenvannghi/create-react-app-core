import { createSelector } from 'reselect';
import { KEY_REDUCER_SAGA, FIELDS_STATE } from './consts';
import { initState } from './reducer';

const commonSelector = state => state[KEY_REDUCER_SAGA] || initState;

export const makeSelectSidebarToggle = () => createSelector(commonSelector, item => item[FIELDS_STATE.SIDEBAR_TOGGLE]);
