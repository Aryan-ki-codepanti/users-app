import { FETCH_USERS, SET_ERROR, SET_USERS } from "./types";

const initialState = {
    loading: false,
    users: [],
    error: ""
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                loading: true,
                users: [],
                error: ``
            };

        case SET_USERS:
            return {
                loading: false,
                users: action.payload,
                error: ``
            };

        case SET_ERROR:
            return {
                loading: false,
                users: [],
                error: action.payload
            };

        default:
            return state;
    }
};
