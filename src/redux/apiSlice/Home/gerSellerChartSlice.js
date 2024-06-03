import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseURL} from "../../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    sellers: []
  };

export const getSellerChart = createAsyncThunk(
    'getSellerChart',
    async (year, thunkApi) => {
        try{
            const response = await baseURL.get(`/auth/seller-count?year=${year}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });

            const result = [];
            Object.keys(response?.data?.data?.month).forEach((key) => {
                const data = {
                    name: key,
                    value: response?.data?.data?.month[key]
                }
                result.push(data)
            });
            return result;
        }catch(error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getSellerChartSlice = createSlice({
    name: 'getSellerChart',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSellerChart.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getSellerChart.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.sellers= action.payload
        }),
        builder.addCase(getSellerChart.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.sellers= []
        })
    }
});

export default getSellerChartSlice.reducer