import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    admins: []
  };

export const getAdmins = createAsyncThunk(
    'admins',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/all-admin-account`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getAdminsSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAdmins.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getAdmins.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.admins= action.payload
        }),
        builder.addCase(getAdmins.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.admins= []
        })
    }
});

export default getAdminsSlice.reducer