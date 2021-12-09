import React from "react";
import "./Example.css"

export default function Example(props){
    if (props.example){
        return ( <em className="Example">Example: {props.example}</em>)
    } else {
        return null;
    }
}