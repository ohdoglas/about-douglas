import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './miniFooter.css'

const MiniFooter: React.FC = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer_main">
            <div className="center_div">
                <p className="center_div_text">
                    © 2024 Douglas Farias Nunes de Morais. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default MiniFooter;