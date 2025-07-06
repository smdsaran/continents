import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    continentLists: [],
    status: 'idle',
    error: null,
    filter: "All",
    itemsCount: 12
}


export const fetchContinents = createAsyncThunk(
  'continents/fetchContinents',
  async () => {
    const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
    const countries = response.data;
    return countries;
  }
);

const continentsSlice = createSlice({
  name: 'continents',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.itemsCount = 12;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContinents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContinents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.continentLists = action.payload;
      })
      .addCase(fetchContinents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setFilter } = continentsSlice.actions;

export default continentsSlice.reducer;
