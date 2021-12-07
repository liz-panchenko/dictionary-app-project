import React from "react";
import "./KeywordResults.css";
import WordMeaning from "./WordMeaning";

export default function KeywordResults({ apiRespose }) {
  if (apiRespose !== null) {
    function displayMeanings() {
      let meanings = apiRespose[0].meanings;
      return (
        <ul>
          {meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <WordMeaning meaning={meaning} />
              </div>
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
