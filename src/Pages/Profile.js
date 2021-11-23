import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
    fetchAsyncUsers,
    setCurrentUser,
    fetchAsyncCurrentUser
} from "../redux";

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
    }, [id , fetchUser , users , setCurrentUser]);

    return (
        <div>
            <h1>Profile {id} </h1>
            <p> {user ? user.username : "nope"} </p>
            <button onClick={() => navigate("/")}> Go Back </button>
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
