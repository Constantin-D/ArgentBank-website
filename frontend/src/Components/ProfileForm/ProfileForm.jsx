import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUserProfile,
    updateUserProfile,
} from "../../redux/reducers/userSlice";
// import { useHistory } from "react-router-dom"; // Importer useHistory pour la redirection conditionnelle
import "./profile-form.scss";

const ProfileForm = () => {
    const user = useSelector((state) => state.user);
    const { token } = useSelector((state) => state.authentication);
    const dispatch = useDispatch();
    // const history = useHistory(); // Créer une instance de l'historique de navigation

    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(user.userName);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);

    // Récupère les données utilisateur lors du premier montage du composant
    useEffect(() => {
        dispatch(fetchUserProfile(token));
    }, [dispatch, token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ token, userName, firstName, lastName }));
        setEditMode(false);
        // console.log("User updated:", { userName, firstName, lastName });
    };

    const handleCancel = () => {
        setEditMode(false);
        setUserName(user.userName);
        setFirstName(user.firstName);
        setLastName(user.lastName);
    };

    return (
        <div className="header">
            <div>
                {/* Affiche "Edit user info" si en mode édition, sinon affiche le nom de l'utilisateur */}
                <h1>
                    {isEditing
                        ? "Edit user info"
                        : `Welcome back\n${user.firstName} ${user.lastName}!`}
                </h1>
                {!isEditing && (
                    <button
                        className="edit-button"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit Name
                    </button>
                )}
            </div>
            {isEditing && (
                <div>
                    <form className="profile-form" onSubmit={handleSubmit}>
                        <h2>Edit Profile</h2>
                        <div className="form-group">
                            <label htmlFor="userName">Username:</label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="save-button">
                                Save
                            </button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProfileForm;
