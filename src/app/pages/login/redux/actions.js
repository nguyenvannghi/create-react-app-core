import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './consts';

export const onLoginCall = createAction(nameConst.LOGIN_CALL, params => ({ payload: params }));
export const onLoginSucceeded = createAction(nameConst.LOGIN_CALL_SUCCEEDED, data => ({ payload: data }));
export const onLoginFailed = createAction(nameConst.LOGIN_CALL_FAILED, error => ({ payload: error }));
