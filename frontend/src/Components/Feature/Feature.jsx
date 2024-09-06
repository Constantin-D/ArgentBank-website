import React from "react";
import chatIcon from "./../../assets/images/icon-chat-min.webp";
import moneyIcon from "./../../assets/images/icon-money-min.webp";
import securityIcon from "./../../assets/images/icon-security-min.webp";
import "./feature.scss";

const featuresData = [
    {
        icon: chatIcon,
        alt: "Chat Icon",
        title: "You are our #1 priority",
        description:
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
        icon: moneyIcon,
        alt: "Money Icon",
        title: "More savings means higher rates",
        description:
            "The more you save with us, the higher your interest rate will be!",
    },
    {
        icon: securityIcon,
        alt: "Security Icon",
        title: "Security you can trust",
        description:
            "We use top of the line encryption to make sure your data and money is always safe.",
    },
];

function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {/* <div className="features-container"> */}
            {featuresData.map((feature, index) => (
                <div key={index} className="feature-item">
                    <img
                        src={feature.icon}
                        alt={feature.alt}
                        className="feature-icon"
                    />
                    <h3 className="feature-title">{feature.title}</h3>
                    <p> {feature.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;
