 import {configureStore} from "@reduxjs/toolkit"
 import  userReducer  from "../Features/FeaturesSlice"
 import tokenReducer from "../Features/TokenSlice"
 import playListReducer from "../Features/PlayListSlice"
 
 export default configureStore ({
     reducer : {
      user: userReducer,
      token : tokenReducer,
      playList: playListReducer, 
     }
 })