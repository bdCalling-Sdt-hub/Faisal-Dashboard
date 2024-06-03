import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    sellers: []
  };

export const getSellerList = createAsyncThunk(
    'getSellerList',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/all-seller`, {
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



export const getSellerListSlice = createSlice({
    name: 'getSellerList',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSellerList.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getSellerList.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.sellers= action.payload
        }),
        builder.addCase(getSellerList.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.sellers= []
        })
    }
});

export default getSellerListSlice.reducer