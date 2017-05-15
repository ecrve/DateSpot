//import React from 'react';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from '.reducers';
import AppWithNavigationState from './navigators/AppNavigator';

class DateSpotApp extends React.Component {
    store = createStore(AppReducer, {}, applyMiddleware(
        promiseMiddleware()
    ));


    render() {
        return (
            <Provider store ={this.store}>
                    <AppWithNavigationState />
                    </Provider>
        );
    }
}

export default DateSpotApp;