import React, { useState } from 'react';
import './RandomQuote.css';
import twitter_icon from '../assets/icons/twitter.png';
import reload_icon from '../assets/icons/reload.png';

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: 'Did you know that the first computer programmer?',
    author: 'Ada Lovelace',
  });

  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>{quote.author}</div>
          <div className='icons'>
            <img src={reload_icon} alt=''/>
            <img src={twitter_icon} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
