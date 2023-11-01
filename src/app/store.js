import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import accountsSlice from "../redux/accounts/accountsSlice";
//import reducers

const rootReducer = combineReducers({
    user: accountsSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store