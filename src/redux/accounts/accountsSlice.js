import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        firstName: '',
        lastName: '',
        pp: '',
        id: '4321646553',
    },
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.pp = action.payload.pp
        },
        logOut: (state) => {
            state.loggedIn= false
            state.firstName = ''
            state.lastName = ''
            state.pp = ''
        },
    },
})

export const { logIn, logOut } = userSlice.actions
export const selectUser = ( state ) => state.user
export default userSlice.reducer