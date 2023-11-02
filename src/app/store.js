import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import accountsSlice from "../redux/accounts/accountsSlice";
import postsSlice from "../redux/posts/postsSlice";
//import reducers

const rootReducer = combineReducers({
    user: accountsSlice,
    posts: postsSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store