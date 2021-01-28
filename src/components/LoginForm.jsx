import React from "react";
import "../assets/css/Login.css"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import PropTypes from 'prop-types';
import axios from "axios";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const newState = { ...prevState };
            newState[name] = value;
            return newState;
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://localhost:8000/api/auth/token/login', {
            username: this.state.username,
            password: this.state.password,
        }).then(resp => {
            localStorage.setItem('token', resp.data.auth_token);
            localStorage.setItem('username', this.state.username);
            this.setState({
                loggedIn: true,
                displayedForm: '',
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
                    <Button color="success" className="btn animation-on-hover" onCLick={this.handleLogin}
                        disabled={!(this.state.username.length > 0 && this.state.password.length > 0)}>
                        Sign In&nbsp;&nbsp;<i className="fas fa-sign-in-alt"/>
                    </Button>
                </Form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
};
