import React from "react";

export default function WordMeaning({meaning}) {
    return (
      <li>
        <strong>{meaning.partOfSpeech}</strong> <br />{" "}
        {meaning.definitions[0].definition}
      </li>
    );
}