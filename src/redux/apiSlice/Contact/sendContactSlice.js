import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
  };

export const sendContact = createAsyncThunk(
    'sendContact',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/contact`, {...value}, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            return response?.data;
        }catch(error){
            console.log(error)
            const message = error?.response?.data.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const sendContactSlice = createSlice({
    name: 'sendContact',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(sendContact.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(sendContact.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false

        }),
        builder.addCase(sendContact.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default sendContactSlice.reducer