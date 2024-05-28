import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const updatePrivacy = createAsyncThunk(
    'updatePrivacy',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/privacy`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const updatePrivacySlice = createSlice({
    name: 'updatePrivacy',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updatePrivacy.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updatePrivacy.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(updatePrivacy.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default updatePrivacySlice.reducer