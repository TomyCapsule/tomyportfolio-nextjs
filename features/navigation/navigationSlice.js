import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name:'navigationState',
    initialState:{
        works: 1
    },
    reducers:{
        worksNext: (state) => {
            if(state.works === 3){
                state.works = 1;
            }else{
                state.works ++;
            }
            
        },
        worksPrev: (state) => {
            if(state.works === 1){
                state.works = 3
            }else{
                state.works--
            }
        }
    }
}) 

export const { worksNext, worksPrev } = navigationSlice.actions;
export default navigationSlice.reducer;