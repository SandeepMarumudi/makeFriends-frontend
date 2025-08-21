import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"

const appStore = configureStore({
    reducer:{
       user:userReducer,
       feed:feedReducer,
       connections:connectionReducer,
       requests:requestReducer
    }
})
export default appStore