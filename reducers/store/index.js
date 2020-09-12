import { createStore, applyMiddleware } from "redux";
import allreducers from "./combainreducers";
import thunk from "redux-thunk";
import { sessionService } from "redux-react-session";

const store = createStore(allreducers, applyMiddleware(thunk));
sessionService.initSessionService(store);
export default store;