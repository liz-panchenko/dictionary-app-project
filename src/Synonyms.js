import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 1) {
    return (
      <div className="Synonyms">
        {" "}
       <em className="synonyms-header">Synonyms:</em>
        {props.synonyms.map(function (synonym, index) {
          if (index < 7) {
            return <span key={index} className="synonyms-list"> {synonym}; </span>;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
