import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { AddressCard } from "../../Components/AddressCard/AddressCard";
import { CompanyCard } from "../../Components/CompanyCard/CompanyCard";
import { ProfileImageCard } from "../../Components/ProfileImageCard/ProfileImageCard";
import { UserInfoCard } from "../../Components/UserInfoCard/UserInfoCard";
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

    useEffect(() => {
        user 
        ? document.title = `@${user.username} | Users App`
        : document.title = `@no-user | Users App`; 
    }, [ user ]);

    useEffect(() => {
        users.length === 0
            ? fetchUser(Number(id))
            : setCurrentUser(users.find(user => user.id === Number(id)));
    }, [id, fetchUser, users, setCurrentUser]);

    return (
        <div className="profile-page-wrapper">
            <div class="container">
                <div class="image">
                    {user && (
                        <ProfileImageCard
                            image={`https://avatars2.githubusercontent.com/u/${user.id}`}
                        />
                    )}
                </div>
                <div className="user-info">
                    {user && <UserInfoCard user={user} />}
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
