import { combineReducers } from "@reduxjs/toolkit";


// Reducers
import introSlice from "./introReducer";

const rootReducer = combineReducers({
  intro: introSlice,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;