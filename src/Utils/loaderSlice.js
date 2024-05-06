import { createSlice } from "@reduxjs/toolkit";
const loaderSlice = createSlice({
    name:'loader',
    initialState: false,
    reducers: {
        showLoader:(state,action)=> {
            return true;
        },

        hideLoader:()=> {
            return false;
        }
    }
});

export default loaderSlice.reducer;
export const {showLoader, hideLoader } = loaderSlice.actions;