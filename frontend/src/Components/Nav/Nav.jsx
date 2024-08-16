import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/images/argentBankLogo-min.webp";
import "./nav.scss";

const Nav = ({ isLoggedIn, userName }) => {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {isLoggedIn ? (
                    <>
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {userName}
                        </Link>
                        <Link to="/" className="main-nav-item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Nav;

