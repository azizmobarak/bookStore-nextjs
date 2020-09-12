import { combineReducers } from "redux";
import cartlist from '../cart-reducer';
import sessionReducer from "../session";

const allreducers = combineReducers({
    Cart: cartlist,
    session: sessionReducer
});

export default allreducers;