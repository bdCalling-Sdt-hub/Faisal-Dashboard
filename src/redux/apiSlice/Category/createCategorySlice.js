import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const createCategory = createAsyncThunk(
    'createCategory',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/category`, value, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            
            return response?.data.message;
        }catch(error){
            console.log(error)
            const message = error?.response?.data?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const createCategorySlice = createSlice({
    name: 'createCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(createCategory.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(createCategory.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(createCategory.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default createCategorySlice.reducer