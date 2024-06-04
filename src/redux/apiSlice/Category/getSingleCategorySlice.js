import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    category: {}
};

export const getCategory = createAsyncThunk(
    'getCategory',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/category/${value}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getCategorySlice = createSlice({
    name: 'getCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCategory.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getCategory.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.category= action.payload
        }),
        builder.addCase(getCategory.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.category= {}
        })
    }
});

export default getCategorySlice.reducer