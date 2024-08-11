import React from "react";
import Nav from "./../../Components/Nav/Nav";
import LoggedInNav from "./../../Components/LoggedInNav/LoggedInNav";
import ProfileForm from "./../../Components/ProfileForm/ProfileForm";
import Transaction from "./../../Components/Transaction/Transaction";
import Footer from "./../../Components/Footer/Footer";

function Profile() {
    const userName = "Tony";
    return (
        <div className="profile-page">
            <Nav />
            <LoggedInNav  />
            <ProfileForm />
            <Transaction />
            <Footer />
        </div>
    );
}

export default Profile;
