import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice";

import "./profile-form.scss";

const ProfileForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser({ name, email }));
        console.log("User updated:", { name, email });
    };

    return (
        <div className="header">
            <div>
                <h1>
                    Welcome back
                    <br />
                    {user.name}!
                    {/* Plus tard => First name & Last name en Data */}
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <div>
                <form className="profile-form" onSubmit={handleSubmit}>
                    <h2>Edit Profile</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="save-button">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
