
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

export const store = configureStore();

const state = store.getState();

console.log("store state: ", state);

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
