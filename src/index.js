import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import AdminLayout from "./layouts/Admin.jsx";
import App from "./App";

import "assets/css/dashboard-react.css";


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            <Route path="/" render={props => <App {...props} />}/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
