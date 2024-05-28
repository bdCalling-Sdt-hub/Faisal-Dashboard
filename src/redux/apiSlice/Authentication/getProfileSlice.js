import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const getProfile = createAsyncThunk(
    'getProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/profile`, {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data?.user;
        }catch(error){
            return thunkApi.rejectWithValue(error?.message);
        }
        
    }
)



export const getProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload;
        }),
        builder.addCase(getProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
});

export default getProfileSlice.reducer