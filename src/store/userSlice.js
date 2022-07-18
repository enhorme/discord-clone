import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
       user:null
    },
    reducers:{
        userLogin (state,{payload}) {
            state.user = payload
        },
        userLogout (state,{payload}) {
            state.user = null
        }
    }
})


export const {userLogin,userLogout} = userSlice.actions
export default userSlice.reducer