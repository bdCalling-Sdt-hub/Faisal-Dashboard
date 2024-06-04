import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const makeFeatured = createAsyncThunk(
    'makeFeatured',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.put(`/product/featured/${value}`, {}, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data.message;
        }catch(error){
            console.log(error)
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makeFeaturedSlice = createSlice({
    name: 'makeFeatured',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeFeatured.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(makeFeatured.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(makeFeatured.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default makeFeaturedSlice.reducer