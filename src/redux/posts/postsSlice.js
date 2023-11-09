import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";


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
            const selectedPost = state.postArray.find((post) => post.id === action.payload);
            selectedPost.likes += 1;
        },
        removeLike: (state, action) => {
            const selectedPost = state.postArray.find((post) => post.id === action.payload);
            selectedPost.likes -= 1;
        },
        savePost: (state, action) => {
            const selectedPost = state.postArray.find((post) => post.id === action.payload)

        }
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

const selectPostArray = (state) => state.posts.postArray;

// Define a selector to retrieve a post by its id
export const selectPost = createSelector(
    [selectPostArray],
    (postArray, key) => {
      const filteredPost = postArray.find((post) => post.id === key);
      if (!filteredPost) {
        console.warn(`No post found for postKey: ${key}`);
        console.log(key)
      }
      return filteredPost;
    }
  );

export const { addLike, removeLike } = postSlice.actions
export const selectPosts = ( state ) => state.posts
export default postSlice.reducer