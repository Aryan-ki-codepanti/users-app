import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncUsers } from '../redux'

const Home = ({ status , fetchUsers }) => {

    useEffect(() => {
        fetchUsers();
    } , [ fetchUsers ]);

    return (
        <div>
            Home Page
            
            <h2> Status : { status.loading ? "Loading" : "Not Loading" } </h2>
            {status.users.map(user => (
                <div key={user.id}>
                    <Link to={`/profile/${user.id}`}> { user.username } </Link>
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