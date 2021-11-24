import React from "react";
import { useNavigate } from "react-router";
import "./ProfileCard.css";

export const ProfileCard = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <img className="profile-picture" src="" alt="" />
            <h1 className="name"> {user.name} </h1>
            <p className="username"> @{user.username} </p>
            <button
                className="profile-button"
                onClick={() => navigate(`/profile/${user.id}`)}
            >
                View Profile
            </button>
        </div>
    );
};
