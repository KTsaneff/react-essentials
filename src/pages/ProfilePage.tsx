import React from "react";
import User from "../models/User";
import "../styles/profile.css"

export default function ProfilePage() {
    const user = new User (
        "Krassy Tsaneff",
        41,
        "krassytsaneff@gmail.com",
        "https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg"
    );

    return (
        <div className="profile-container">
            <img 
                className="avatar"
                src= {user.avatarImgUrl}
                alt={user.name}
            />
            <h2 className="name">{user.name}</h2>
            <p className="bio">Learning React step-by-step</p>
        </div>
    );
}