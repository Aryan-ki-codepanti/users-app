import React from "react";
import { useNavigate } from "react-router";
import "./ProfileCard.css";

export const ProfileCard = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <div className="card-top">
                <img
                    className="profile-picture"
                    src={`https://avatars2.githubusercontent.com/u/${user.id}`}
                    alt=""
                />
                <button
                    className="profile-button"
                    onClick={() => navigate(`/profile/${user.id}`)}
                >
                    View Profile
                </button>
            </div>
            <div className="card-mid">
                <h1 className="name"> {user.name} </h1>
                <p className="username"> @{user.username} </p>
            </div>
            <p className="tagline">
                {user.company.catchPhrase}@{user.company.name}
            </p>
        </div>
    );
};
