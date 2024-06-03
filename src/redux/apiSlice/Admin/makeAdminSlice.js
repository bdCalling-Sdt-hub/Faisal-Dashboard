import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const makeAdmin = createAsyncThunk(
    'admins',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/auth/register`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const makeAdminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(makeAdmin.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(makeAdmin.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(makeAdmin.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default makeAdminSlice.reducer