import React from "react";
import "./Example.css"

export default function Example(props){
    if (props.example){
        return (
          <span className="Example">
            Example: <span className="text">{props.example}</span>
          </span>
        );
    } else {
        return null;
    }
}