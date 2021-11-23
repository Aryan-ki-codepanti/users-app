import { FETCH_USERS, SET_ERROR, SET_USERS, SET_CURRENT_USER } from "./types";

const initialState = {
    loading: false,
    users: [],
    error: "",
    user: null
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                user: null,
                loading: true,
                users: [],
                error: ``
            };

        case SET_USERS:
            return {
                user: null,
                loading: false,
                users: action.payload,
                error: ``
            };

        case SET_ERROR:
            return {
                user: null,
                loading: false,
                users: [],
                error: action.payload
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};
