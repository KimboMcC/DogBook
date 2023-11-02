import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import accountsSlice from "../redux/accounts/accountsSlice";
import postsSlice from "../redux/posts/postsSlice";
import commentsSlice from "../redux/comments/commentsSlice";
//import reducers

const rootReducer = combineReducers({
    user: accountsSlice,
    posts: postsSlice,
    comments: commentsSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store