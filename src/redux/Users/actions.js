import { FETCH_USERS, SET_USERS, SET_ERROR } from "./types";

export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const setUsers = users => ({
    type: SET_USERS,
    payload: users
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});


export const fetchAsyncUsers = () => async (dispatch) => {
    dispatch(fetchUsers());
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        const data = await res.json();
        dispatch(setUsers(data));
    }
    catch(error){
        dispatch(setError(error));
    }

};