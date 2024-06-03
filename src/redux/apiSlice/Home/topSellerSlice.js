import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    seller: []
  };

export const topSeller = createAsyncThunk(
    'topSeller',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/top-seller-list?page=${value}`, {
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



export const topSellerSlice = createSlice({
    name: 'topSeller',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(topSeller.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(topSeller.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.seller= action.payload
        }),
        builder.addCase(topSeller.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.seller= []
        })
    }
});

export default topSellerSlice.reducer