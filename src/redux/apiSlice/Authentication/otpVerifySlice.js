import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../../Config";



const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const emailVerification = createAsyncThunk(
    'otpVerify',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/email-verified`);
            return response?.data;
        }catch(error){
            return thunkApi.rejectWithValue(error?.message);
        }
        
    }
)



export const emailVerificationSlice = createSlice({
    name: 'otpVerify',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(emailVerification.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(emailVerification.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(emailVerification.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default emailVerificationSlice.reducer