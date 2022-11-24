import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    count: 0,
    isLoading: false,
    quotes: [],
  },
  reducers: {
    startLoadingQuotes: (state /* action */) => {
      state.isLoading = true;
    },
    setQuotes: (state, action) => {
      state.isLoading = false;
      state.count = action.payload.count;
      state.quotes = action.payload.quotes;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingQuotes, setPokemons, setQuotes } =
  quoteSlice.actions;
