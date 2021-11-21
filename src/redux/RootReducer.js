import { combineReducers } from "redux";
import { UsersReducer } from "./Users/reducer";

export const RootReducer = combineReducers({
    users: UsersReducer
});