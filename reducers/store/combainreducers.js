import { combineReducers } from "redux";
import cartlist from '../cart-reducer';
import sessionReducer from "../session";
import adminsession from '../admin-session';

const allreducers = combineReducers({
    Cart: cartlist,
    session: sessionReducer,
    adminsession: adminsession
});

export default allreducers;