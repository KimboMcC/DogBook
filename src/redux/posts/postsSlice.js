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
            selectedPost.liked = true;
            console.log(JSON.stringify(selectedPost))
        },
        removeLike: (state, action) => {
            const selectedPost = state.postArray.find((post) => post.id === action.payload);
            selectedPost.likes -= 1;
            selectedPost.liked = false;   
        },
        savePost: (state, action) => {
            const selectedPost = state.postArray.find((post) => post.id === action.payload)
            selectedPost.saved = true;
        },
        removePost: (state, action) => {
            const selectedPost = state.postArray.find((post) => post.id === action.payload)
            selectedPost.saved = false;
        }
    },  
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postArray = action.payload.data.map((post) => ({
                    ...post,
                    liked: false,
                    saved: false
                }))
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

const getPostArray = ({ posts }) => posts.postArray;

export const getSavedPosts = createSelector(
    [getPostArray], 
    (postArray) =>
    postArray.filter((post) => post.saved === true)
);

export const getInteractions = (postKey) => createSelector(
    [getPostArray], 
    (postArray) => {
        const post = postArray.find((post) => post.id === postKey)
        const liked = post.liked
        const saved = post.saved
        return {
            liked,
            saved
        }
    }
)

export const getTags = (searchTag) => createSelector(
    [getPostArray], 
    (postArray) => {
        return postArray.filter((post) => post.tags.includes(searchTag.toLowerCase()))
    }
)

export const { addLike, removeLike, savePost, removePost } = postSlice.actions
export const selectPosts = ( state ) => state.posts
export default postSlice.reducer