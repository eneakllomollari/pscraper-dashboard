import React from "react";
import "../assets/css/Login.css"
import {Form, FormGroup, Input, Label} from "reactstrap"
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
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

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0
            && this.state.first_name.length > 0 && this.state.last_name.length > 0
    }

    render() {
        return (
            <div className="content login">
                <Form onSubmit={e => this.props.handleSignup(e, this.state)}>
                    <div className="prompt">Sign Up to pscraper</div>
                    <br/>
                    <FormGroup controlId="first_name" bsSize="large">
                        <Label>First Name</Label>
                        <Input
                            autoFocus
                            type="firstName"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="last_name" bsSize="large">
                        <Label>Last Name</Label>
                        <Input
                            type="LastName"
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username" bsSize="large">
                        <Label>Username</Label>
                        <Input
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
                    <button type="submit" className="btn animation-on-hover"
                            disabled={!this.validateForm()}>
                        Register
                    </button>
                </Form>
            </div>
        );
    }
}

export default SignupForm
SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired
};