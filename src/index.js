import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { initialLocalization } from 'app/utils/localization';
import AppRoutes from 'app/routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './styles/index.scss';
import store from './app/redux/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store(initialLocalization)}>
        <IntlProvider>
            <React.StrictMode>
                <AppRoutes />
            </React.StrictMode>
        </IntlProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
