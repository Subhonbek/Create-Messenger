import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store'
import {BrowserRouter} from "react-router-dom";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState());

store.subscribe(() => {
    reRenderEntireTree(store.getState());
});

