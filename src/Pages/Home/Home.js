import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Loading } from "../../Components/Loading/Loading";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchAsyncUsers } from "../../redux";
import "./Home.css";

const Home = ({ status, fetchUsers }) => {

    document.title = "Home | Users App"

    useEffect(() => {
        status.users.length === 0 && fetchUsers();
    }, [fetchUsers, status.users.length]);

    return (
        <div className="container">
            <h1 className="heading"> Top Users </h1>
            {status.loading &&  <Loading />}
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
