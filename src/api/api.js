import { startLoadingQuotes, setQuotes } from '../slice/quotesSlice';

export const getQuotes = (count = 1) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingQuotes());

    const response = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
    );
    const data = await response.json();

    dispatch(setQuotes({ quotes: data }));
  };
};
