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
              {"  "}
              <small> [{apiRespose[0].phonetic}]</small>
              {"  "}
              <a href={apiRespose[0].phonetics[0].audio} target="_blank" rel="noreferrer" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-volume-up audio-link"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
              </svg>
              </a>
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
