import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    summary: {}
  };

export const getSummary = createAsyncThunk(
    'getSummary',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/allstatusdata`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getSummarySlice = createSlice({
    name: 'getSummary',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSummary.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getSummary.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.summary= action.payload
        }),
        builder.addCase(getSummary.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.summary= {}
        })
    }
});

export default getSummarySlice.reducer