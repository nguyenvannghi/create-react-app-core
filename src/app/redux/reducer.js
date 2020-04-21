import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { intlReducer } from 'react-intl-redux';
import history from 'app/routes/history';
import commonReducer from './common/reducer';
import { KEY_REDUCER_SAGA } from './common/consts';

const rootReducer = (asyncReducers = {}) => {
    return combineReducers({
        router: connectRouter(history),
        intl: intlReducer,
        [KEY_REDUCER_SAGA]: commonReducer,
        ...asyncReducers,
    });
};
export default rootReducer;
