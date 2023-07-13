import { createSlice } from "@reduxjs/toolkit";
const initialState = {offerList: []}




const offerSlice = createSlice({
    name:'offer',
    initialState,
    reducers:{
       
        setOfferList(state,action){
           state.offerList= action.payload;

        },
       removeFromBOfferList(state,action){
        state.offerList = state.offerList.filter((item) => item._id !== action.payload);

        }

    }
})

export const {setOfferList,removeFromBOfferList} = offerSlice.actions
export default offerSlice.reducer