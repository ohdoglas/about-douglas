import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-one">
            <header className="header_main">
                <nav className="header_nav">
                    <div className="header_left_nav">
                        <button className="header_menu_button">MENU</button>
                    </div>
                    <div className="header_right_nav">
                        <button className="header_contact_button">CONTACT</button>
                    </div>
                </nav>
            </header>
        </body>
    )
}

export default Header
