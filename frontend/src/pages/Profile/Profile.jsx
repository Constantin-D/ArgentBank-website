import React, { useEffect } from "react";
import Footer from "./../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import ProfileForm from "./../../Components/ProfileForm/ProfileForm";
import Transaction from "./../../Components/Transaction/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../../redux/reducers/userSlice";

import "./profile.scss";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.authentication.token);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/v1/user/profile",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    dispatch(setUser(data.body));
                } else {
                    console.error("Error fetching user profile:", data.message);
                }
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        };

        fetchUserProfile();
    }, [dispatch, token]);

    const accounts = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance",
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance",
        },
    ];

    return (
        <div>
            <Nav isLoggedIn={true} userName={user.userName} />
            <main className="main bg-dark">
                <ProfileForm />
                <h2 className="sr-only">Accounts</h2>
                {accounts.map((account, index) => (
                    <Transaction
                        key={index}
                        title={account.title}
                        amount={account.amount}
                        description={account.description}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default Profile;
