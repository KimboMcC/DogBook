import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const commentslice = createSlice ({
    name: 'comments',
    initialState: {
        commentArray: [],
        loadingC: 'idle',
    },
    reducers: {
        addComment: (state, action) => {
            const newComment = action.payload;
            state.commentArray = [newComment, ...state.commentArray];
            console.log(state.commentArray)
          },
          
        loadComment: (state, action) => {
        const newComments = action.payload;

        newComments.forEach((newComment) => {
            // Check if the comment with the same 'id' already exists
            const existingComment = state.commentArray.find(
            (comment) => comment.id === newComment.id
            );

            if (!existingComment) {
            // Add the new comment to the commentArray
            state.commentArray.push(newComment);
            }
        });
        }

    },
})

export const { addComment, loadComment } = commentslice.actions
export const selectComments = ( state ) => state.comments
export default commentslice.reducer
