import { createSlice } from "@reduxjs/toolkit";

const dataSaveApi=createSlice({
    name:'data',
    initialState:[],
    reducers:{
        setData(state,action){
            state.push({
                id:action.payload,
                name:action.payload,
                description:action.payload,
                deviceـname:action.payload,
                phone_number:action.payload
            })
        }
    }
})

export const { setData } = dataSaveApi.actions
export default dataSaveApi.reducer