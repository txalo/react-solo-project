import React from "react";
import Button from "./Button";


export default function PersonalInfo() {
    return (
        <section className="personalInfo">
            <div                
                className="personalInfo--photo"
            />
            <h1 className="personalInfo--name">
                    Gonzalo Cabrera
            </h1>
            <h2 className="personalInfo--profile">
                Fullstack Web Developer
            </h2>
            <a  className="personalInfo--link_web"
                href="https://github.com/txalo"
                title="Gonzalo Cabrera Portfolio">
                gonzalo.website.com
            </a>
            <div className="personalInfo--contact">
                <Button text="Email" color="white" icon={["fas", "envelope"]} />
                <Button text="LinkedIn" color="blue" icon={["fab", "linkedin"]} />
            </div>
                
        </section>
    )
};
