import React from "react";
import Nav from "./../../Components/Nav/Nav";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Footer from "./../../Components/Footer/Footer";

function Login() {
    return (
        <div>
            <Nav />
            <main className="main bg-dark">
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
}

export default Login;
