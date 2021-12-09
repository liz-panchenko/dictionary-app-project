import React from "react";
import "./KeywordResults.css";
import WordMeaning from "./WordMeaning";

export default function KeywordResults({ apiRespose }) {
  console.log(apiRespose);
  if (apiRespose !== null) {
    function displayMeanings() {
      return (
        <div>
          {apiRespose.map(function (apiResposeArray, index) {
            return (
              <ol key={index} className="meaning-variant">
                {apiResposeArray.meanings.map(function (meaning, index) {
                  return (
                    <li key={index}>
                      <WordMeaning meaning={meaning} />
                    </li>
                  );
                })}
              </ol>
            );
          })}
        </div>
      );
    }
    return (
      <div className="KeywordResults">
        <div className="response-container">
          <div className="text-container">
            <h3>
              <span className="keyword">{apiRespose[0].word}</span>
              {"   "}
              <small> [{apiRespose[0].phonetic}]</small>
            </h3>
            <p>Definitions:</p>
            {displayMeanings()}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
