import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import twitter_icon from "../assets/icons/twitter.png";
import reload_icon from "../assets/icons/reload.png";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Did you know that the first computer programmer?",
    author: "Ada Lovelace",
  });

  useEffect(() => {
    async function fetchQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      setQuote(data[Math.floor(Math.random() * data.length)]);
    }

    fetchQuotes();
  }, []);

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`
    );
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img src={reload_icon} onClick={random} alt="reload" />
            <img src={twitter_icon} onClick={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
