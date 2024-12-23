import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";



const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={ <HomePage /> } />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;