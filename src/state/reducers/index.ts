import { type } from "os";
import  { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";


const reducers = combineReducers({
    repositiories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;