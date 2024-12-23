import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './Footer.css';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer_main">
            <div className="left_div">
                <a href="/">My Path as a Developer</a>
                <a href="/">Beyond the Code</a>
                <a href="/">What Drives Me</a>
                <a href="/">Get in Touch</a>
            </div>
            <div className="center_div">
                <p className="center_div_text">
                    © 2024 Douglas Farias Nunes de Morais. All rights reserved.
                </p>
            </div>
            <div className="right_div">
                <div className="img_gmail" aria-label="gmail"></div>
                <div className="img_github" aria-label="github"></div>
                <div className="img_linkedin" aria-label="linkedin"></div>
                <div className="img_instagram" aria-label="instagram"></div>
                <div className="img_discord" aria-label="discord"></div>
            </div>
        </footer>
    )
}

export default Footer;