import React from "react";
import classNames from "classnames";
import {
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Modal,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

class AdminNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            modalSearch: false,
            color: "navbar-transparent",
            isDarkMode: true
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateColor);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColor);
    }

    toggleMode = () => {
        if (this.state.isDarkMode) {
            document.body.classList.add("white-content");
            this.setState({
                isDarkMode: false
            })
        } else {
            document.body.classList.remove("white-content");
            this.setState({
                isDarkMode: true
            })
        }
    };

    updateColor = () => {
        if (window.innerWidth < 993 && this.state.collapseOpen) {
            this.setState({
                color: "bg-white"
            });
        } else {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };

    render() {
        return (
            <>
                <Navbar className={classNames("navbar-absolute", this.state.color)} expand="lg">
                    <Container fluid>
                        <div className="navbar-wrapper">
                            <div className={classNames("navbar-toggle d-inline", {toggled: this.props.sidebarOpened})}>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={this.props.toggleSidebar}
                                >
                                    <span className="navbar-toggler-bar bar1"/>
                                    <span className="navbar-toggler-bar bar2"/>
                                    <span className="navbar-toggler-bar bar3"/>
                                </button>
                            </div>
                            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                                {this.props.brandText}
                            </NavbarBrand>
                        </div>
                        <Collapse navbar isOpen={this.state.collapseOpen}>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        nav
                                        onClick={e => e.preventDefault()}
                                    >
                                        <div className="fas fa-cogs fa-2x"/>
                                        <b className="caret d-none d-lg-block d-xl-block"/>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                                        <NavLink tag="li">
                                            <DropdownItem><i className="fas fa-sign-out-alt"></i>Log out
                                            </DropdownItem>
                                        </NavLink>
                                        <NavLink tag="li">
                                            <DropdownItem toggle={false} onClick={this.toggleMode} className="nav-item">
                                                {this.state.isDarkMode ?
                                                    <i className="fas fa-toggle-on"></i> :
                                                    <i className="fas fa-toggle-off"></i>
                                                }
                                                Dark Mode
                                            </DropdownItem>
                                        </NavLink>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <li className="separator d-lg-none"/>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Modal
                    modalClassName="modal-search"
                    isOpen={this.state.modalSearch}
                    toggle={this.toggleModalSearch}
                >
                    <div className="modal-header">
                        <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text"/>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalSearch}
                        >
                            <i className="tim-icons icon-simple-remove"/>
                        </button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default AdminNavbar;
