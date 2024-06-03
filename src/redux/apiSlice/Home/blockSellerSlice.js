import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
  };

export const getBlockSeller = createAsyncThunk(
    'blockSeller',
    async (id, thunkApi) => {
        try{
            const response = await baseURL.patch(`/auth/block-account/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            return response?.data;
        }catch(error){
            return thunkApi.rejectWithValue(error?.message);
        }
        
    }
)



export const blockSellerSlice = createSlice({
    name: 'blockSeller',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getBlockSeller.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getBlockSeller.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(getBlockSeller.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default blockSellerSlice.reducer