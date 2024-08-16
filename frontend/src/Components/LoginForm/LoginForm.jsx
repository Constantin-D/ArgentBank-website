import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./login-form.scss";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({ username: "", password: "" });

    const validate = () => {
        let valid = true;
        let errors = { username: "", password: "" };

        if (username.trim() === "") {
            errors.username = "Username is required";
            valid = false;
        }

        if (password.trim() === "") {
            errors.password = "Password is required";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            try {
                const response = await fetch("http://locahost:3001/api/v1/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (response.ok) {
                    const responseJson = await response.json();
                    const token = responseJson.token;
                    console.log(responseJson);
                    console.log("Token: ", token);
                    dispatch(login(responseJson.token));
                    // dispatch(login(responseJson.body.token));
                    navigate("/profile");
                } else {
                    const error = await response.json();
                    dispatch(loginFailure({error: error.message}));
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                dispatch(loginFailure({error: error.message}));

            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                    <div className="error">{errors.username}</div>
                )}
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                    <div className="error">{errors.password}</div>
                )}
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
