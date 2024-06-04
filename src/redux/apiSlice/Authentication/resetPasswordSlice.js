import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
  };

export const resetPassword = createAsyncThunk(
    'resetPassword',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/auth/reset-password`, {...value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data?.message;
        }catch(error){
            return thunkApi.rejectWithValue(error?.response?.data?.message);
        }
        
    }
)



export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(resetPassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(resetPassword.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(resetPassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default resetPasswordSlice.reducer