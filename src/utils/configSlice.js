import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "languageselect",
    initialState: {
        langString: "en",
    },
    reducers: {
       changeLanguage: (state, action) =>{
        state.langString = action.payload
       }
    },
})


export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;