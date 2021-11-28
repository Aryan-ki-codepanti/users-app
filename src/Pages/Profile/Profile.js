import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { AddressCard } from "../../Components/AddressCard/AddressCard";
import { CompanyCard } from "../../Components/CompanyCard/CompanyCard";
import { ProfileImageCard } from "../../Components/ProfileImageCard/ProfileImageCard";
import {
    fetchAsyncUsers,
    setCurrentUser,
    fetchAsyncCurrentUser
} from "../../redux";
import "./Profile.css";

const Profile = ({
    status: { user, users, loading, error },
    fetchUsers,
    setCurrentUser,
    fetchUser
}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        users.length === 0
            ? fetchUser(Number(id))
            : setCurrentUser(users.find(user => user.id === Number(id)));
    }, [id, fetchUser, users, setCurrentUser]);

    return (
        <div className="profile-page-wrapper">
            <div class="container">
                <h1>Profile {id} </h1>
                <p> {user ? user.username : "nope"} </p>
                <button onClick={() => navigate("/")}> Go Back </button>
                <div class="image">
                    {user && (
                        <ProfileImageCard
                            image={`https://avatars2.githubusercontent.com/u/${user.id}`}
                        />
                    )}
                </div>
                <div className="address">
                    {user && <AddressCard user={user} />}
                </div>
                <div className="company">
                    {user && <CompanyCard company={user.company} />}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    status: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchAsyncUsers()),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    fetchUser: id => dispatch(fetchAsyncCurrentUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
