import React from "react";
import Nav from "./../../Components/Nav/Nav";
import ProfileForm from "./../../Components/ProfileForm/ProfileForm";
import Transaction from "./../../Components/Transaction/Transaction";
import Footer from "./../../Components/Footer/Footer";

function Profile() {
    const isLoggedIn = true;
    const userName = "Tony";
    return (
        <div >
            <Nav isLoggedIn={isLoggedIn} userName={userName} />
            <ProfileForm userName={userName} />
            <Transaction />
            <Footer />
        </div>
    );
}

export default Profile;
