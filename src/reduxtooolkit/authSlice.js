import { createSlice } from "@reduxjs/toolkit";
const initialState = {admin: {}}




const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

        
        saveAdminData(state,action){
           state.admin= action.payload;

        },
        clearReduxAdminData(state,action){
            return initialState

        }

    }
})

export const {saveAdminData,clearReduxAdminData} = authSlice.actions
export default authSlice.reducer