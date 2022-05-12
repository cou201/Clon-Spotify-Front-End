import {createSlice} from "@reduxjs/toolkit";



export const playListSlice = createSlice({
   name:"PlayList",
   initialState : {
       playList: null,
   },
   reducers: {
       SET_PLATLIST: (state, action) =>{
           state.playList = action.payload
       }
   }

});


export const {SET_PLATLIST} = playListSlice.actions;

export const selecPlayList = state => state.playList.playList

export default playListSlice.reducer;