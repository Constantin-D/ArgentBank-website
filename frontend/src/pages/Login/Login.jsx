import React from "react";
import Nav from "./../../Components/Nav/Nav";
import Signin from "../../Components/Signin/Signin";
import Footer from "./../../Components/Footer/Footer";

function Login() {
    return (
        <div className="login-page">
            <Nav />
            <Signin />
            <Footer />
        </div>
    );
}

export default Login;
