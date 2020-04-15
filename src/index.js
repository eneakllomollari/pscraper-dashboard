import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch} from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import Login from "./views/Login";

import "assets/scss/dashboard-react.scss";
import "assets/css/nucleo-icons.css";


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            <Route path="/login"><Login/></Route>
            <Redirect from="/" to="/login"/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
