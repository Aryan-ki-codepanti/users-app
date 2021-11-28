import React from "react";
import "./UserInfoCard.css";

export const UserInfoCard = ({ user }) => {
    return (
        <div className="user-info-wrapper">
            <div className="user-info-header">
                <h1 className="name"> {user.name} </h1>
                <div>
                    <img
                        className="location-icon"
                        src="https://www.hangtimemedia.com/wp-content/uploads/2018/06/location-icon-png-3.png"
                        alt=""
                    />
                    <p className="coordinates">
                        ({user.address.geo.lat} , {user.address.geo.lng})
                    </p>
                </div>
            </div>
            <p className="username"> @{user.username} </p>
            <div className="email-box">
                <h2>Email</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};
