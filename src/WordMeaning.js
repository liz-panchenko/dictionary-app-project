import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./WordMeaning.css";

export default function WordMeaning({ meaning }) {
  return (
    <div className="WordMeaning">
      <strong>{meaning.partOfSpeech}</strong> <br />{" "}
      <ul>
        {meaning.definitions.map(function (definition, index) {
          return (
            <li key={index}>
              {definition.definition} <br />{" "}
              <Example example={definition.example}/>
              <br />{" "}
              <Synonyms synonyms={definition.synonyms}/>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
}
