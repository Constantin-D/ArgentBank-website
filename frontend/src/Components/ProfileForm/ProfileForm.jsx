import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice"; // Import = action setUser
import "./profile-form.scss";

const ProfileForm = () => {
    const user = useSelector((state) => state.user);
    const  token  = useSelector((state) => state.authentication.token);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(user.userName);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);

    // useEffect(() => {
    //     console.log(token); // Affiche le token dans la console
    //     // useEffect pour encapsuler fetchUserProfile
    //     const fetchUserProfile = async () => {
    //         try {
    //             const response = await fetch(
    //                 "http://localhost:3001/api/v1/user/profile",
    //                 {
    //                     method: "POST", //POST = récupérer le profil
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                         // "Content-Type": "application/json",
    //                     },
    //                 }
    //             );

    //             const data = await response.json();
    //             console.log(data);

    //             if (response.ok) {
    //                 // OK = maj l'état utilisateur et les valeurs locales
    //                 console.log(data.body);
    //                 dispatch(setUser(data.body));
    //                 setUserName(data.body.userName);
    //                 setFirstName(data.body.firstName);
    //                 setLastName(data.body.lastName);
    //             } else {
    //                 console.error("Error fetching user profile:", data.message);
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch user profile:", error);
    //         }
    //     };

    //     fetchUserProfile();
    // }, [dispatch, token]); // Correction de la syntaxe du hook useEffect

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "PUT", // PUT = maj du profil
                    headers: {
                        Authorization: `Bearer ${token}`, // = token dans les en-têtes
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userName, firstName, lastName }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                // Si la maj est réussie = maj l'état utilisateur et désactive le mode édition
                dispatch(setUser(data.body));
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
        
        setUserName(user.userName);
        setFirstName(user.firstName);
        setLastName(user.lastName);
    };

    return (
        <div className="header">
            <div>
                <h1>
                    {isEditing
                        ? "Edit user info" // Affiche "Edit user info" en mode édition
                        : `Welcome back\n${firstName} ${lastName}!`}{" "}
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
                                value={userName} // Valeur liée à l'état local userName
                                onChange={(e) => setUserName(e.target.value)} // = maj l'état local lors de la modification
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                disabled
                                //disabled={!isEditing} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                disabled
                                // disabled={!isEditing} 
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
