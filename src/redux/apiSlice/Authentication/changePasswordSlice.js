import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";
import { message } from "antd";


const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const changePassword = createAsyncThunk(
    'changePassword',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/auth/change-password`, {...value}, {
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



export const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(changePassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(changePassword.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(changePassword.rejected, (state, action)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default changePasswordSlice.reducer