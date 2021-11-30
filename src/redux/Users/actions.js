import {
    FETCH_USERS,
    ADD_NEW_USER,
    SET_USERS,
    SET_ERROR,
    SET_CURRENT_USER
} from "./types";

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

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const addNewUser = user => ({
    type: ADD_NEW_USER,
    payload: user
});

// Async Actions

export const fetchAsyncUsers = () => async dispatch => {
    dispatch(fetchUsers());
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        const data = await res.json();
        dispatch(setUsers(data));
    } catch (error) {
        dispatch(setError(error));
    }
};
export const fetchAsyncCurrentUser = id => async dispatch => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await res.json();
    const user = data.find(user => user.id === id);
    dispatch(setCurrentUser(user));
};
