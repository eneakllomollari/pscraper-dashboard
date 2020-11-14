import React from "react";
import {Container, Nav, NavItem, NavLink} from "reactstrap";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container fluid>
                    <Nav>
                        <NavItem>
                            <NavLink>Plug-in Hybrid & Electric Vehicle (PH&EV) Research Center</NavLink>
                        </NavItem>
                    </Nav>
                    <div>
                        <a href="https://phev.ucdavis.edu/about/">About Us</a>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
