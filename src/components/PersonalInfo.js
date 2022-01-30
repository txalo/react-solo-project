import React from "react";

export default function PersonalInfo() {
    return (
        <header className="personalInfo">
            <h1 className="personalInfo--name">
                    Gonzalo Cabrera
            </h1>
            <h2 className="personalInfo--profile">
                Fullstack Web Developer
            </h2>
            <a  className="personalInfo--link_web"
                href="#"
                title="Gonzalo Cabrera Portfolio">
                gonzalo.website.com
            </a>
            <section className="personalInfo--contact">
                <button>Email</button> 
                <button>LinkedIn</button> 
            </section>
                
        </header>
    )
};
