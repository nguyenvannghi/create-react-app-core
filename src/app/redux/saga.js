import { all, fork } from 'redux-saga/effects';

function* sagaDemo() {
    yield console.log('saga aaa');
}

export default function* rootSaga() {
    yield all([fork(sagaDemo)]);
}
