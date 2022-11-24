import React, { useEffect, useState, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuotes } from '../src/api/api';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const App = () => {
  const dispatch = useDispatch();
  const quotesObj = useSelector((state) => state.quotes);
  const isLoading = useSelector((state) => state.quotes.isLoading);

  const [moreQuotes, setMoreQuotes] = useState();
  console.log(isLoading);
  useEffect(() => {
    dispatch(getQuotes());
  }, []);

  const handleMoreQuotes = () => {
    dispatch(getQuotes(moreQuotes));
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>The Simpsons Quotes</h1>
      <hr />
      {isLoading ? (
        <ClimbingBoxLoader
          color="#36d7b7"
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{
            marginLeft: '20px',
            marginBottom: '20px',
          }}
        />
      ) : (
        <div
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {quotesObj.quotes.map((quote, i) => (
            <div
              style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '400px',
              }}
              key={i}
            >
              <h3>Quote By: {quote.character}</h3>
              <img src={quote.image} alt={quote.image} />
              <p>{quote.quote}</p>
            </div>
          ))}
        </div>
      )}
      <input
        type="number"
        value={moreQuotes}
        onChange={(e) => setMoreQuotes(e.target.value)}
        placeholder="Select how many more quotes you want"
        style={{ width: '200px', padding: '10px', marginRight: '30px' }}
      />
      <button onClick={handleMoreQuotes}>Search More!</button>
    </div>
  );
};

export default App;
