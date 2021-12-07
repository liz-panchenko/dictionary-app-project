import React from "react";
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
              <small className="example">{definition.example}</small>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
}
