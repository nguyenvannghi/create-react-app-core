import { createAction } from '@reduxjs/toolkit';
import * as nameConst from './consts';

export const onSidebarToggle = createAction(nameConst.SIDEBAR_TOGGLE, active => ({ payload: active }));
