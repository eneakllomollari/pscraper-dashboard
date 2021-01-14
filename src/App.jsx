import React from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedForm: '',
            loggedIn: !!localStorage.getItem('token'),
            username: localStorage.getItem('username')
        };
    }

    handleSignup = (e) => {
        e.preventDefault();
    };

    displayForm = form => {
        this.setState({displayedForm: form});
    };

    render() {
        let form;
        switch (this.state.displayedForm) {
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
                    loggedIn={this.state.loggedIn}
                    displayForm={this.displayForm}
                />
                {form}
            </div>
        );
    }
}

export default App;