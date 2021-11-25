import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchAsyncUsers } from "../../redux";
import "./Home.css";

const Home = ({ status, fetchUsers }) => {
    useEffect(() => {
        status.users.length === 0 && fetchUsers();
    }, [fetchUsers, status.users.length]);

    return (
        <div className="container">
            <h1 className="heading"> Top Users </h1>
            <h2> Status : {status.loading ? "Loading" : "Not Loading"} </h2>
            
            <div className="profile-container">
                {status.users.map(user => (
                    <div className="profile" key={user.id}>
                        <ProfileCard user={user} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    status: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchAsyncUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
