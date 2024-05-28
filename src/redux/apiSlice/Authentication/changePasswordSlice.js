import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const resetPassword = createAsyncThunk(
    'changePassword',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/reset-pass`, value);
            return response?.data?.message;
        }catch(error){
            return thunkApi.rejectWithValue(error?.response?.data?.message);
        }
        
    }
)



export const resetPasswordSlice = createSlice({
    name: 'changePassword',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(resetPassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(resetPassword.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(resetPassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default resetPasswordSlice.reducer