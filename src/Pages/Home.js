import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { ProfileCard } from '../Components/ProfileCard/ProfileCard';
import { fetchAsyncUsers } from '../redux'

const Home = ({ status , fetchUsers }) => {

    useEffect(() => {
        status.users.length === 0 && fetchUsers();
    } , [ fetchUsers , status.users.length ]);

    return (
        <div>
            Home Page
            
            <h2> Status : { status.loading ? "Loading" : "Not Loading" } </h2>
            {status.users.map(user => (
                <div className="profile" key={user.id}>
                    <ProfileCard user={user} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);