import React, {useState} from "react";
import {Form, FormGroup, Input, Label} from "reactstrap";
import "./Login.css"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="content login">
            <Form onSubmit={handleSubmit}>
                <div className="prompt">Login to pscraper</div>
                <br/>
                <FormGroup controlId="email" bsSize="large">
                    <Label>Username</Label>
                    <Input
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <Label>Password</Label>
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <button type="submit" className="btn btn-primary animation-on-hover"
                        disabled={!validateForm()}>
                    Login
                </button>
                <button type="button" className="btn animation-on-hover" disabled>
                    Register
                </button>
            </Form>
        </div>
    );
}