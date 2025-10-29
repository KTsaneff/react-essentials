import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./src/pages/AboutPage.jsx";
import ProfilePage from "./src/pages/ProfilePage.js";

function MyButton() {
    return (
        <button>I'm a button</button>
    )
}

export default function MyApp() {
    return (
        <BrowserRouter>
            <nav style={{ marginBottem: "1rem"}}>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </nav>

            <Routes>
                <Route 
                    path="/"
                    element={
                        <div>
                            <h1>Welcome to my app</h1>
                            <MyButton />
                        </div>
                    }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}