import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import Admin from "../layouts/Admin"

function Nav(props) {
    const welcomeScreen = (
        <ul style={{textAlign: "center"}}>
            <Button className="btn btn-primary animation-on-hover" onClick={() => props.displayForm('login')}>Log In</Button>
            <Button className="btn animation-on-hover" onClick={() => props.displayForm('signup')}>Sign Up</Button>
        </ul>
    );
    return props.loggedIn ? <Admin {...props}/> : welcomeScreen;
}

export default Nav;

Nav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
};