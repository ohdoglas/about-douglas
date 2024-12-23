import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './HomePage.css'
import MiniFooter from "../../components/footer/miniFooter";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return(
        <body>
            <Header />
            <main className="main_content">

            </main>
            <MiniFooter />
        </body>
    )
}

export default HomePage;
