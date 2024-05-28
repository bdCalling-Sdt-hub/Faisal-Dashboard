import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const editProfile = createAsyncThunk(
    'editProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.put(`/auth/profile-update`, value, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data;
        }catch(error){
            return thunkApi.rejectWithValue(error?.message);
        }
        
    }
)



export const editProfileSlice = createSlice({
    name: 'editProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(editProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload.data
        }),
        builder.addCase(editProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
});

export default editProfileSlice.reducer