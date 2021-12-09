import React from "react";
import "./KeywordResults.css";
import WordMeaning from "./WordMeaning";
import PhoneticsAudio from "./PhoneticsAudio";

export default function KeywordResults({ apiRespose }) {
  console.log(apiRespose);
  if (apiRespose !== null) {
    return (
      <div className="KeywordResults">
        <div className="response-container">
          <div className="text-container">
            <h3>
              <span className="keyword">{apiRespose[0].word}</span>
              {"  "}
              <span className="transcription"> [{apiRespose[0].phonetic}]</span>
              {"  "}
              <PhoneticsAudio audio={apiRespose[0].phonetics[0].audio} />
            </h3>
            <p>Definitions:</p>
            <WordMeaning apiRespose={apiRespose} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
