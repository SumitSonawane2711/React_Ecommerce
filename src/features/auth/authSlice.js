import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./authAPI";

const initialState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);

        return response.data;
    }
);

export const authSlice = createSlice({
    name : 'counter',
    initialState,
    reducer: {
        increment : (state)=> {
            state.value += 1;
        },
    },

    extraReducers: (builder)=>{
        builder
          .addCase(incrementAsync.pending, (state)=>{
            state.status = 'leading';
          })
          .addCase(incrementAsync.fulfilled, (state, action)=> {
            state.status = 'idle';
            state.value += action.payload;
          });
    },
});

export const {increment } = authSlice.actions;

export const selectCount = (state) => state.counter.value;

export default authSlice.reducer;