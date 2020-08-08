import 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import campaignStore from './reducers';
import App from './App.jsx';

const loggerMiddleware = createLogger()

const store = createStore(
    campaignStore,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
