import { createSlice } from "@reduxjs/toolkit";
const initialState = {mobileBankingOrderList: [],bankingOrderList: [],billPayOrderList: [],rechargeOrderList: [],offerOrderList: [],}




const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
       
        setMobileBankingOrderList(state,action){
           state.mobileBankingOrderList= action.payload;

        },
       removeFromMobileBankingOrderList(state,action){
        state.mobileBankingOrderList = state.mobileBankingOrderList.filter((item) => item._id !== action.payload);

        },
        setBankingOrderList(state,action){
            state.bankingOrderList= action.payload;
 
         },
        removeFromBankingOrderList(state,action){
         state.bankingOrderList = state.bankingOrderList.filter((item) => item._id !== action.payload);
 
         },
         setBillPayOrderList(state,action){
            state.billPayOrderList= action.payload;
 
         },
        removeFromMBillPayOrderList(state,action){
         state.billPayOrderList = state.billPayOrderList.filter((item) => item._id !== action.payload);
 
         },
         setRechargeOrderList(state,action){
            state.rechargeOrderList= action.payload;
 
         },
        removeFromRechargeOrderList(state,action){
         state.rechargeOrderList = state.rechargeOrderList.filter((item) => item._id !== action.payload);
 
         },

         setOfferOrderList(state,action){
            state.offerOrderList= action.payload;
 
         },
        removeFromOfferOrderList(state,action){
         state.offerOrderList = state.offerOrderList.filter((item) => item._id !== action.payload);
 
         },

    }
})

export const {setMobileBankingOrderList,removeFromMobileBankingOrderList,setBankingOrderList,removeFromBankingOrderList,setBillPayOrderList,removeFromMBillPayOrderList,setRechargeOrderList,removeFromRechargeOrderList,setOfferOrderList,removeFromOfferOrderList} = orderSlice.actions
export default orderSlice.reducer