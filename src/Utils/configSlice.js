import { createSlice } from "@reduxjs/toolkit";

const configSlice  = createSlice({
    name:'config',
    initialState: {
        languageType: 'en',
        theme: 'dark'
    },
    reducers: {
        updateLanguage:(state, action) => {
            state.languageType = action.payload
        },
        updateTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export default configSlice.reducer;
export const {updateLanguage, updateTheme } = configSlice.actions;

