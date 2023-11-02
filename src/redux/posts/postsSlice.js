import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://dummyapi.io/data/v1/post/?limit=20', {
    headers: {
      'app-id': process.env.REACT_APP_API_KEY,
    },
  });
  const data = await response.json();
  return data;
})

const postSlice = createSlice ({
    name: 'posts',
    initialState: {
        postArray: [],
        loading: 'idle',
    },
    reducers: {
        addLike: (state, action) => {
            const postIndex = state.postArray.findIndex((post) => post.id === action.payload.postId)
            state.postArray[postIndex].likes += 1
        },
        removeLike: (state, action) => {
            const postIndex = state.postArray.findIndex((post) => post.id === action.payload.postId)
            state.postArray[postIndex].likes -= 1
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postArray = action.payload.data
                state.loading = 'succeeded'
            })
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.error.message
            })
    }
})

export const { addLike, removeLike } = postSlice.actions
export const selectPosts = ( state ) => state.posts
export default postSlice.reducer