import { createSlice } from "@reduxjs/toolkit";

 const authData = JSON.parse(localStorage.getItem("auth"))

 const initialState = {
    user:authData?.user || null ,
    token:authData?.token || ""
 }

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.user=action.payload.user
            state.token=action.payload.token

            localStorage.setItem("auth",JSON.stringify(action.payload))
        },

        logOut:(state)=>{
            state.user = null ,
            state.token = ""

            localStorage.removeItem("auth")
        }


    }
})

export const {loginSuccess , logOut} = authSlice.actions
export default authSlice.reducer
