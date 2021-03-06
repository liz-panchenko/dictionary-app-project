import React from "react";
import "./KeywordResults.css";
import WordMeaning from "./WordMeaning";
import PhoneticsAudio from "./PhoneticsAudio";
import Pictures from "./Pictures";
import ErrorMessage from "./ErrorMessage";

export default function KeywordResults({
  error,
  dictionaryApiRespose,
  pexelsApiResponse,
}) {
  if (dictionaryApiRespose !== null && error === false) {
    return (
      <div className="KeywordResults">
        <div className="response-container">
          <div className="text-container">
            <h3>
              <span className="keyword">{dictionaryApiRespose[0].word}</span>
              {"  "}
              <span className="transcription">
                {" "}
                [{dictionaryApiRespose[0].phonetic}]
              </span>
              {"  "}
              <PhoneticsAudio
                audio={dictionaryApiRespose[0].phonetics[0].audio}
              />
            </h3>
            <p>Definitions:</p>
            <WordMeaning dictionaryApiRespose={dictionaryApiRespose} />
            <Pictures pexelsApiResponse={pexelsApiResponse} />
          </div>
        </div>
      </div>
    );
  } else if (error === true ){
    return (
      <div className="KeywordResults">
        <div className="response-container">
          <div className="text-container">
            <ErrorMessage />
            <Pictures pexelsApiResponse={pexelsApiResponse} />{" "}
          </div>
        </div>
      </div>
    );
  }
  else {
      return <h3>Loading...</h3>;
  }
}
