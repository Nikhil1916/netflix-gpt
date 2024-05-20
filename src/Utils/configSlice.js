import { createSlice } from "@reduxjs/toolkit";

const configSlice  = createSlice({
    name:'config',
    initialState: {
        languageType: 'en',
        theme: 'dark',
        isGptPage: false
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
        }
    }
})

export default configSlice.reducer;
export const {updateLanguage, updateTheme, toggleGptPage } = configSlice.actions;

