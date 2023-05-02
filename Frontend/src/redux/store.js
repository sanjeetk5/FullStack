import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as noteReducer } from "./NotesReducer/reducer";
import { LoginReducer } from "./LoginReducer/LoginReducer";
import { reducer as Dashboardreducer } from "./DashboardReducer/reducer";


const mainReducer = combineReducers({
  noteReducer,
  LoginReducer,
  Dashboardreducer,
});


export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));
