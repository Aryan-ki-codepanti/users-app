import React from 'react';
import "./ProfileImageCard.css";

export const ProfileImageCard = ({ image }) => {
    return (
        <div class="image-wrapper">
            <img className="profile-image" src={image} alt="user-png" />       
        </div>
    )
};
