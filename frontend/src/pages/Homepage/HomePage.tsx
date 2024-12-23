import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import './HomePage.css'

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return(
        <body>
            <Header />
            <main className="main_content">

            </main>
        </body>
    )
}

export default HomePage;
