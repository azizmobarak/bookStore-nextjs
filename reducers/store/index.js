import { createStore, applyMiddleware } from "redux";
import allreducers from "./combainreducers";
import thunk from "redux-thunk";

const store = createStore(allreducers, applyMiddleware(thunk));
export default store;