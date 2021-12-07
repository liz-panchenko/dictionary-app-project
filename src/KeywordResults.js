import React from "react";
import "./KeywordResults.css";

export default function KeywordResults({ apiRespose }) {
  if (apiRespose !== null) {
    function displayMeanings() {
      let meanings = apiRespose[0].meanings;
      return (
        <ul>
          {meanings.map(function (meaning, index) {
            return (
              <li key={index}>
                <strong>{meaning.partOfSpeech}</strong> <br />{" "}
                {meaning.definitions[0].definition}
              </li>
            );
          })}
        </ul>
      );
    }
    console.log(apiRespose);
    return (
      <div className="KeywordResults">
        <div className="response-container">
          <div className="text-container">
            <h3>
              <span className="keyword">{apiRespose[0].word}</span>
              {"   "}
              <small> [{apiRespose[0].phonetic}]</small>
            </h3>
            {displayMeanings()}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
