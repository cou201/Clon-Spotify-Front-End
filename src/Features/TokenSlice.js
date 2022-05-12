import { createSlice } from "@reduxjs/toolkit";


export const TokenSlice = createSlice({
    name: "Token",
    initialState: {
        Token: null,
    },
    reducers: {
        SET_TOKEN: (state, action) => {
          state.Token = action.payload;
        }
    }
})



export const {SET_TOKEN} = TokenSlice.actions;


export const selectToken = (state) => state.Token.Token;


export default TokenSlice.reducer