import React from "react";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import Feature from "../../Components/Feature/Feature";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Feature />
            </main>
            <Footer />
        </>
    );
};

export default Home;
