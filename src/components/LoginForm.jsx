import React from "react";
import "../assets/css/Login.css"
import {Button, Form, FormGroup, Input, Label} from "reactstrap"
import PropTypes from 'prop-types';
import axios from "axios";

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const newSate = {...prevState};
            newSate[name] = value;
            return newSate;
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/token/login',
            {
                username: this.state.username,
                password: this.state.password,
            }).then(resp => {
            localStorage.setItem('token', resp.data.auth_token);
            this.setState({
                logged_in: true,
                displayed_form: '',
            });
        }).catch(err => {
            alert(err.response.data.non_field_errors)
        });
    };

    render() {
        return (
            <div className="content login">
                <Form>
                    <div className="prompt">Sign in to pscraper</div>
                    <FormGroup controlId="username" bsSize="large">
                        <Label>Username</Label>
                        <Input
                            autoFocus
                            type="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button color="success" className="btn animation-on-hover" onClick={this.handleLogin}
                            disabled={!(this.state.username.length > 0 && this.state.password.length > 0)}>
                        Sign In&nbsp;&nbsp;<i className="fas fa-sign-in-alt"></i>
                    </Button>
                    <Button color="info" className="btn animation-on-hover">
                        Register&nbsp;&nbsp;
                        <i className="fas fa-user-plus"></i>
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm
LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
};