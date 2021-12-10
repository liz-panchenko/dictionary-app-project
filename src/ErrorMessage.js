import React from "react";
import "./ErrorMessage.css"

export default function ErrorMessage() {
  return (
    <div className="ErrorMessage">
      <h3>No Definitions Found</h3>
      <p>
        Sorry, we couldn't find definitions for the word you were looking for.{" "}
        <br />
        You can try the search again at later time or head to the web instead.
      </p>
    </div>
  );
}
