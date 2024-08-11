import React from "react";
import ProfileForm from "./../ProfileForm/ProfileForm";
import Transaction from "./../Transaction/Transaction";
import LoggedInNav from "./../LoggedInNav/LoggedInNav";


import "./user-acc.scss";

const UserAcc = () => {
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
            <LoggedInNav userName={userName} />

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
        </>
    );
};

export default UserAcc;
