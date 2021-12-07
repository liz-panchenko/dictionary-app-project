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
              <em className="example">{definition.example}</em>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
}
