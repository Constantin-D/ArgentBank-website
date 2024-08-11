import React from "react";
import { Link } from "react-router-dom";
import "./logged-in-nav.scss"; 

const LoggedInNav = ({ userName }) => {
    return (
        <nav className="main-nav">
            <div>
                <Link to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {userName}
                </Link>
            </div>
            <div>
                <Link to="/" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    );
};

export default LoggedInNav; 
