import React from "react";
import "./Pictures.css";

export default function Pictures({ pexelsApiResponse }) {
  if (pexelsApiResponse) {
    return (
      <div className="Pictures">
        <div className="row">
          {pexelsApiResponse.map(function (picture, index) {
            return (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={picture.src.landscape}
                    className="img-fluid"
                    alt={picture.url}
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
