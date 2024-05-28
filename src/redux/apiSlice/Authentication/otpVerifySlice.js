import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
};

export const otpVerify = createAsyncThunk(
    'otpVerify',
    async (value, thunkApi) => {
        console.log(value)
        try{
            const response = await baseURL.post(`/auth/verify-email`, {...value});
            return response?.data?.message;
        }catch(error){
            return thunkApi.rejectWithValue(error?.response?.data?.message);
        }
        
    }
)



export const otpVerifySlice = createSlice({
    name: 'otpVerify',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(otpVerify.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(otpVerify.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(otpVerify.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
})

export default otpVerifySlice.reducer