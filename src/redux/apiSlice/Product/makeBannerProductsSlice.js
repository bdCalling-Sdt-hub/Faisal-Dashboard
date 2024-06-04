import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const makeBanner = createAsyncThunk(
    'makeBanner',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.put(`/product/banner/${value}`, {}, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data.message;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makeBannerSlice = createSlice({
    name: 'makeBanner',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeBanner.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(makeBanner.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(makeBanner.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default makeBannerSlice.reducer