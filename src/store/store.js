import { configureStore } from '@reduxjs/toolkit';

import { quoteSlice } from '../slice/quotesSlice';

export const store = configureStore({
  reducer: {
    quotes: quoteSlice.reducer,
  },
});
