import React from "react";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { IconContext } from "react-icons";

const Social = (props) => {
    const sz = props.size;
    return (
        <IconContext.Provider value={{ color: 'white', size: sz }} >
            <a href="https://www.linkedin.com/in/hema-sree-bojanapally/" target="_blank" rel="noopener noreferrer" className="contact-icons-about-section">
                <AiFillLinkedin />
            </a>
            <a href="mailto:b.hemasree12@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icons-about-section">
                <SiGmail />
            </a>
            <a href="https://github.com/HemaSreeBojanapally" target="_blank" rel="noopener noreferrer" className="contact-icons-about-section">
                <AiFillGithub />
            </a>
            
        </IconContext.Provider>
    );
};

export default Social;
