import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    privacy: {}
  };

export const getPrivacy = createAsyncThunk(
    'getPrivacy',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/privacy`, {
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



export const getPrivacySlice = createSlice({
    name: 'getPrivacy',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getPrivacy.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getPrivacy.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.privacy= action.payload
        }),
        builder.addCase(getPrivacy.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.privacy= {}
        })
    }
});

export default getPrivacySlice.reducer