import { NSP_USER } from 'app/consts';

export const KEY_REDUCER_SAGA = 'userReducer';
export const LOGIN_CALL = `${NSP_USER}LOGIN_CALL`;
export const LOGOUT_CALL = `${NSP_USER}LOGOUT_CALL`;
export const LOGIN_CALL_FAILED = `${NSP_USER}LOGIN_CALL_FAILED`;
export const LOGIN_CALL_SUCCEEDED = `${NSP_USER}LOGIN_CALL_SUCCEEDED`;
export const FIELDS_STATE = {
    USER_INFO: 'userInfo',
    ERROR: 'error',
    LOADING: 'loading',
};
