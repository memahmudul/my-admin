import { createSlice } from "@reduxjs/toolkit";
const initialState = {balanceRequestList: []}




const balanceRequestSlice = createSlice({
    name:'balanceRequest',
    initialState,
    reducers:{
       
        setBalanceRequestList(state,action){
           state.balanceRequestList= action.payload;

        },
       removeFromBalanceRequestList(state,action){
        state.balanceRequestList = state.balanceRequestList.filter((item) => item._id !== action.payload);

        }

    }
})

export const {setBalanceRequestList,removeFromBalanceRequestList} = balanceRequestSlice.actions
export default balanceRequestSlice.reducer