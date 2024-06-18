import { createSlice } from "@reduxjs/toolkit";

const configSlice  = createSlice({
    name:'config',
    initialState: {
        languageType: 'en',
        theme: 'dark',
        isGptPage: false,
        notify: ''
    },
    reducers: {
        updateLanguage:(state, action) => {
            state.languageType = action.payload
        },
        updateTheme: (state, action) => {
            state.theme = action.payload
        },
        toggleGptPage:(state, action)=>{
            state.isGptPage = action.payload;
        },
        sendNotification:(state,action)=>{
            state.notify = action.payload;
        },
        resetState: () => {
            return undefined; // This will reset the state slice to its initial state
        },
    }
})

export default configSlice.reducer;
export const {updateLanguage, updateTheme, toggleGptPage , sendNotification, resetState } = configSlice.actions;

