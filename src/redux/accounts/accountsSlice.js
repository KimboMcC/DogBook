import { createSlice } from "@reduxjs/toolkit"
import pp1 from '../../images/Rectangle 1.png'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: true, // SET AS TRUE FOR TESTING MAKE SURE TO SWITCH BACK WHEN FINSIHED
        firstName: 'kik',
        lastName: 'mcc',
        pp: '../../images/Rectangle 1.png',
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

/*
loggedIn: true, // SET AS TRUE FOR TESTING MAKE SURE TO SWITCH BACK WHEN FINSIHED
        firstName: 'Kim',
        lastName: 'McCauley',
        pp: '../../images/Rectangle 1.png',
        id: '4321646553',
*/