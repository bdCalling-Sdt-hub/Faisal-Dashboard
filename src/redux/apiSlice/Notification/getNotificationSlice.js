import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    notifications: [],
    pagination: {}
  };

export const getNotification = createAsyncThunk(
    'getNotification',
    async (_, thunkApi) => {
        try{
            const response = await baseURL.get(`/notifications`, {
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



export const getNotificationSlice = createSlice({
    name: 'getNotification',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getNotification.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getNotification.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.notifications= action.payload?.data
            state.pagination= action.payload.pagination
        }),
        builder.addCase(getNotification.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.notifications= []
            state.pagination={}
        })
    }
});

export default getNotificationSlice.reducer