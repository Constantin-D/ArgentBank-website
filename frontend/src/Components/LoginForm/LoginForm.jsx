import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-form.scss";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    // const [errors, setErrors] = useState({ username: "", password: "" });

    // const validate = () => {
    //     let valid = true;
    //     let errors = { username: "", password: "" };

    //     if (username.trim() === "") {
    //         errors.username = "Username is required";
    //         valid = false;
    //     }

    //     if (password.trim() === "") {
    //         errors.password = "Password is required";
    //         valid = false;
    //     }

    //     setErrors(errors);
    //     return valid;
    // };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (validate()) {
        //     console.log("Form submitted", { username, password, rememberMe });
        // }
        navigate("/profile");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* {errors.username && (
                    <div className="error">{errors.username}</div>
                )} */}
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* {errors.password && (
                    <div className="error">{errors.password}</div>
                )} */}
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
