import React from "react";
import PersonalInfo from './components/PersonalInfo';
import About from './components/About';
import SocialBar from './components/SocialBar';
import Interests from './components/Interests';

export default function App() {
    return (
        <div className="container">
            <PersonalInfo />
            <About />
            <Interests interests={["Asado expert", "Japanese culture fan", "Reader"]} />
            <SocialBar 
                icons={{
                    twitter:"twitter.com/txalo", 
                    facebook:"facebook.com", 
                    instagram:"instagram.com/txalo", 
                    github:"github.com/txalo"}}
            />
        </div>
    )    
};
