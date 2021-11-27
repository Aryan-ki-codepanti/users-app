import React from 'react'
import "./AddressCard.css";

export const AddressCard = ({ user }) => {
    return (
        <div className="address-wrapper">
            <div className="address-header">
                <span> Address </span>
                <div></div>
            </div>
            <div className="address-content">
                <h2 className="city"> { user.address.city } </h2>
                <p className="street-suite">
                    { user.address.street } , { user.address.suite }
                </p>
                <p className="zip"> Zip: { user.address.zipcode } </p>
            </div>
        </div>
    )
}
