import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch} from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/scss/dashboard-react.scss";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            <Redirect from="/" to="/admin/dashboard"/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
