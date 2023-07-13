import { createSlice } from "@reduxjs/toolkit";
const initialState = {notificationList: []}




const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
       
        setNotificationList(state,action){
           state.notificationList= action.payload;

        },
       removeFromNotificationList(state,action){
        state.notificationList = state.notificationList.filter((item) => item._id !== action.payload);

        }

    }
})

export const {setNotificationList,removeFromNotificationList} = notificationSlice.actions
export default notificationSlice.reducer