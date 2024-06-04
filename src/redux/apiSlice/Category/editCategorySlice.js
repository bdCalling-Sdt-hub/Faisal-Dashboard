import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const editCategory = createAsyncThunk(
    'editCategory',
    async (value, thunkApi) => {
        const {id, data} = value;
        try{
            const response = await baseURL.put(`/category/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            return response?.data.message;
        }catch(error){
            console.log(error)
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const editCategorySlice = createSlice({
    name: 'editCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editCategory.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(editCategory.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(editCategory.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
});

export default editCategorySlice.reducer