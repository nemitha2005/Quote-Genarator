// src/components/RandomQuote.js
import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import twitter_icon from "../assets/icons/twitter.png";
import reload_icon from "../assets/icons/reload.png";
import ParticleBackgroundComponent from "./ParticleBackgroundComponent";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Did you know that the first computer programmer?",
    author: "Ada Lovelace",
  });
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

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
    setLoading(true);
    setFadeIn(false);
    setTimeout(() => {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(select);
      setLoading(false);
      setFadeIn(true);
    }, 500);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="background">
      <ParticleBackgroundComponent />
      <div className="container">
        <div className={`quote ${fadeIn ? "fade-in" : ""}`}>{quote.text}</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className={`author ${fadeIn ? "fade-in" : ""}`}>
              - {quote.author.split(",")[0]}
            </div>
            <div className="icons">
              <button
                className={`icon-button ${loading ? "loading" : ""}`}
                onClick={random}
              >
                <img src={reload_icon} alt="reload" />
              </button>
              <button className="icon-button" onClick={twitter}>
                <img src={twitter_icon} alt="twitter" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
