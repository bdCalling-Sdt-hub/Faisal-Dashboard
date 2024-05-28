import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    message: null,
  };


export const forgetPassword = createAsyncThunk(
    'forgotPassword',
    async (email, thunkApi) => {
        try{
            const response = await baseURL.post(`/forgot-pass`, email);
            return response?.data?.message;
        }catch(error){
            return thunkApi.rejectWithValue(error?.message);
        }
        
    }
)



export const forgetPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(forgetPassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(forgetPassword.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.message= action.payload
        }),
        builder.addCase(forgetPassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.message= null
        })
    }
});

export default forgetPasswordSlice.reducer