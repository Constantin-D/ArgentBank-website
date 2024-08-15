import React from "react";
import "./profile-form.scss";
import Transaction from "./../Transaction/Transaction";
// import Nav from "./../Nav/Nav";

const ProfileForm = () => {
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
        <>
            {/* <Nav userName={userName} /> */}
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {userName}!
                    </h1>
                    <button className="edit-button">Edit Name</button>
                </div>
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
        </>
    );
};

export default ProfileForm;
