import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
  };

export const updatePassword = createAsyncThunk(
    'resetPassword',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/update-pass`, {...value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data;
        }catch(error){
            return thunkApi.rejectWithValue(error?.response?.data?.message);
        }
        
    }
)



export const updatePasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updatePassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updatePassword.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(updatePassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default updatePasswordSlice.reducer