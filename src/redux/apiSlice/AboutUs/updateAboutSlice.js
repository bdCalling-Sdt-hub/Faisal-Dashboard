import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const updateAbout = createAsyncThunk(
    'updateAbout',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/aboutus`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const updateAboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updateAbout.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updateAbout.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(updateAbout.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default updateAboutSlice.reducer