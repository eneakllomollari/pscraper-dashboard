import React, {Component} from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import axios from "axios"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            logged_in: !!localStorage.getItem('token'),
            username: ''
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://localhost:8000/core/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({username: json.username});
                });
        }
    }

    handleSignup = (e, data) => {
        e.preventDefault();
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({logged_in: false, username: ''});
    };

    display_form = form => {
        this.setState({
            displayed_form: form
        });
    };

    render() {
        let form;
        switch (this.state.displayed_form) {
            case 'login':
                form = <LoginForm handleLogin={this.handleLogin}/>;
                break;
            case 'signup':
                form = <SignupForm handleSignup={this.handleSignup}/>;
                break;
            default:
                form = null;
        }

        return (
            <div className="App">
                <Nav
                    logged_in={this.state.logged_in}
                    display_form={this.display_form}
                    handleLogout={this.handleLogout}
                />
                {form}
            </div>
        );
    }
}

export default App;