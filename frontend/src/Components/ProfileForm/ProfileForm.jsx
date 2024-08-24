import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../redux/reducers/userSlice";
import { setUserName } from "../../redux/reducers/userSlice"; // Import = action setUser
import "./profile-form.scss";

const ProfileForm = () => {
    const user = useSelector((state) => state.user);
    const  token  = useSelector((state) => state.authentication.token);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    // const [userName, setUserName] = useState(user.userName);
    // const [firstName, setFirstName] = useState(user.firstName);
    // const [lastName, setLastName] = useState(user.lastName);
    const [newUserName, setNewUserName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newUserName);
        
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "PUT", // PUT = maj du profil
                    headers: {
                        Authorization: `Bearer ${token}`, // = token dans les en-têtes
                        "Content-Type": "application/json",
                    },
                    // body: JSON.stringify({ userName, firstName, lastName }),
                    body: JSON.stringify({ userName: newUserName }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                console.log(data.body)
                // Si la maj est réussie = maj l'état utilisateur et désactive le mode édition
                dispatch(setUserName(data.body.userName));
                setIsEditing(false);
            } else {
                console.error("Error updating user profile:", data.message);
            }
        } catch (error) {
            console.error("Failed to update user profile:", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false); // Désactive le mode édition
        setNewUserName(""); // Réinitialise le champ du nouveau username
        // setUserName(user.userName);
        // setFirstName(user.firstName);
        // setLastName(user.lastName);
    };

    return (
        <div className="header">
            <div>
                <h1>
                    {isEditing
                        ? "Edit user info" // Affiche "Edit user info" en mode édition
                        : `Welcome back\n${user.firstName} ${user.lastName}!`}{" "}
                    {/* Affiche le message de bienvenue sinon !! */}
                </h1>
                {!isEditing && (
                    <button
                        className="edit-button"
                        onClick={() => setIsEditing(true)} // Active le mode édition
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
                                placeholder={user.userName} // = valeur par défaut
                                value={newUserName} // Valeur liée à l'état local userName
                                onChange={(e) => setNewUserName(e.target.value)} // = maj l'état local lors de la modification
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={user.firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                disabled 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={user.lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="save-button">
                                Save
                            </button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleCancel} // = annuler la modification + retour à l'état initial
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
