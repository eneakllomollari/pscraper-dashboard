import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";

import AdminLayout from "layouts/Admin.jsx";
import LoginForm from "components/LoginForm";

import "assets/css/dashboard-react.css";


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            <Route path="/login" render={props => <LoginForm {...props} />}/>
            <Redirect from="/" to="/admin"/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
