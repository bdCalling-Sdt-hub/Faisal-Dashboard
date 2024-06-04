import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    seller: {}
  };

export const getSingleSeller = createAsyncThunk(
    'getSingleSeller',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/all-seller-details/${value}`, {
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



export const getSingleSellerSlice = createSlice({
    name: 'getSingleSeller',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSingleSeller.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getSingleSeller.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.seller= action.payload
        }),
        builder.addCase(getSingleSeller.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.seller= {}
        })
    }
});

export default getSingleSellerSlice.reducer