import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchAsyncUsers } from '../redux'

const Profile = ({ status , fetchUsers }) => {

    useEffect(() => {
        fetchUsers();
    } , []);

    return (
        <div>
            <h1>Profile</h1>
            <h2> Status : { status.loading ? "Loading" : "Not Loading" } </h2>
            {status.users.map(user => (
                <div key={user.id}>
                    <p> { user.username } </p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    status: state.users   
});

const mapDispatchToProps = dispatch => ({
    fetchUsers : () => dispatch(fetchAsyncUsers())
});

export default connect(mapStateToProps , mapDispatchToProps)(Profile);