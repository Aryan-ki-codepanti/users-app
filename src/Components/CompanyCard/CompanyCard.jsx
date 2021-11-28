import React from 'react';
import "./CompanyCard.css";

export const CompanyCard = ({ company }) => {
    return (
        <div className="company-wrapper">
            <div className="company-header">
                <span> Company </span>
                <div></div>
            </div>
            <div className="company-content">
                <p> { company.name } </p>
                <p> { company.catchPhrase } </p>
                <p> { company.bs } </p>
            </div>
        </div>
    )
};
