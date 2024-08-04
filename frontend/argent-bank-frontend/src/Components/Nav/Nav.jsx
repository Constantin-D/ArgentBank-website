import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";

const Nav = () => {
    return (
        <div>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                {/* <div>
                    <a class="main-nav-item" href="./sign-in.html">
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div> */}
            </nav>
        </div>
    );
};

export default Nav;