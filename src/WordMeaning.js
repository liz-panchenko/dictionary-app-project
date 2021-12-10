import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./WordMeaning.css";

export default function WordMeaning({ dictionaryApiRespose }) {
  return (
    <div className="WordMeaning">
      {dictionaryApiRespose.map(function (apiResposeArray, index) {
        return (
          <ol key={index} className="meaning-variant">
            {apiResposeArray.meanings.map(function (meaning, index) {
              return (
                <li key={index}>
                  <div>
                    <strong>{meaning.partOfSpeech}</strong> <br />{" "}
                    <ul>
                      {meaning.definitions.map(function (definition, index) {
                        return (
                          <li key={index}>
                            {definition.definition}
                            <br />
                            <Example example={definition.example} />
                            <br />
                            <Synonyms synonyms={definition.synonyms} />
                          </li>
                        );
                      })}
                    </ul>
                    <br />
                  </div>
                </li>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
}
