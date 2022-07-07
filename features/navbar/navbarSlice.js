import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name:"navbarState",
    initialState:{
        value: false
    },
    reducers:{
        switchMode: (state) => {
            state.value = !state.value;
        },
        darkNavBar: (state) => {
            state.value = false;
        },
        lightNavBar: (state) => {
            state.value = true;
        }
    }
});

export const {switchMode, darkNavBar, lightNavBar} = navbarSlice.actions

export default navbarSlice.reducer