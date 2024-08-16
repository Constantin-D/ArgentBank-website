import React from "react";
import Footer from "./../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import ProfileForm from "./../../Components/ProfileForm/ProfileForm";
import Transaction from "./../../Components/Transaction/Transaction";

import "./profile.scss";

function Profile() {
    const isLoggedIn = true;
    const userName = "Tony";

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
            <Nav isLoggedIn={isLoggedIn} userName={userName} />
            <main className="main bg-dark">
                <ProfileForm userName={userName} />
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
