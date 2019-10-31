import React from 'react';
import {HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reduces from "./reduces/index"
import thunk from "redux-thunk"
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux"

let store = createStore(
    Reduces,
    applyMiddleware(thunk)
)
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

