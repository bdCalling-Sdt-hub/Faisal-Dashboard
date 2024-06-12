import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    sellers: [],
    pagination: {}
  };

export const getSellerList = createAsyncThunk(
    'getSellerList',
    async (value, thunkApi) => {
        const {page, search} = value
        try{
            const params = new URLSearchParams();
            if (search) params.append('search', search);
            if (page) params.append('page', page);
            const response = await baseURL.get(`/auth/all-seller?${params.toString()}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
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
            state.sellers= action.payload?.data
            state.pagination= action.payload?.pagination
        }),
        builder.addCase(getSellerList.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.sellers= []
            state.pagination= {}
        })
    }
});

export default getSellerListSlice.reducer