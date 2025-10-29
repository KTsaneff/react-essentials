import React from "react";
import "../styles/profile.css"

export default function ProfilePage() {
    return (
        <div className="profile-container">
            <img 
                className="avatar"
                src="https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg"
                alt="User Avatar"
            />
            <h2 className="name">Krassy Tsaneff</h2>
            <p className="bio">Learning React step-by-step</p>
        </div>
    );
}