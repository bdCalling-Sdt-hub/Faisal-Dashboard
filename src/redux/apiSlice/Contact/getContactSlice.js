import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    contacts: [],
    pagination: {}
  };

export const getContact = createAsyncThunk(
    'getContact',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/contact`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            return response?.data;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getContactSlice = createSlice({
    name: 'getContact',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getContact.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getContact.fulfilled, (state, action)=> {
            // console.log(action.payload.data)
            state.error= false,
            state.success= true,
            state.loading= false,
            state.contacts= action.payload?.data,
            state.pagination= action.payload.pagination

        }),
        builder.addCase(getContact.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.contacts= []
            state.pagination= {}
        })
    }
});

export default getContactSlice.reducer