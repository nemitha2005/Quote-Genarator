import React, { useState } from 'react';
import './RandomQuote.css';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: 'Did you know that the first computer programmer',
    author: 'Ada Lovelace',
  });

  return (
    <div classname='container'>
      hi
    </div>
  );
}

export default RandomQuote;
