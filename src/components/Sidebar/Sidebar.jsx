import React from "react";
import {NavLink} from "react-router-dom";
import {PropTypes} from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import {Nav} from "reactstrap";

let ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.refs.sidebar, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }

    render() {
        const {bgColor, routes, logo} = this.props;

        return (
            <div className="sidebar" data={bgColor}>
                <div className="sidebar-wrapper" ref="sidebar">
                    <div className="logo">
                        <a className="simple-text logo-mini" href="/" onClick={this.props.toggleSidebar}>
                            <img className="logo-mini" alt="logo" src={logo.imgSrc}/>
                        </a>
                        <a className="simple-text" href="/">
                            {logo.text}
                        </a>
                    </div>
                    <Nav>
                        {routes.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <li
                                    className={
                                        this.activeRoute(prop.path) +
                                        (prop.pro ? " active-pro" : "")
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                        onClick={this.props.toggleSidebar}
                                    >
                                        <i className={prop.icon}/>
                                      <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </Nav>
                </div>
            </div>
        );
    }
}

Sidebar.defaultProps = {
    bgColor: "primary",
    routes: [{}]
};

Sidebar.propTypes = {
    bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        innerLink: PropTypes.string,
        outterLink: PropTypes.string,
        text: PropTypes.node,
        imgSrc: PropTypes.string
    })
};

export default Sidebar;
