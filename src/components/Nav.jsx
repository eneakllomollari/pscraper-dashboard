import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import Admin from "layouts/Admin"

function Nav(props) {
    const welcomeScreen = (
        <ul style={{textAlign: "center"}}>
            <Button className="btn btn-primary animation-on-hover" onClick={() => props.display_form('login')}>Log
                In</Button>
            <Button className="btn animation-on-hover" onClick={() => props.display_form('signup')}>Sign Up</Button>
        </ul>
    );

    return props.logged_in ? <Admin {...props}/> : welcomeScreen;
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
};