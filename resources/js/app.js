
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import SiteStore from './site-store';
import SiteRoutes from './site-routes';
import * as serviceWorker from './lib/serviceWorker';
const routeChanged = require('route-changed');
 
routeChanged((url) => {
  window.scrollTo(0, 0);
});


ReactDOM.render(
    <Provider store={SiteStore}>
        <Router>
            <SiteRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();