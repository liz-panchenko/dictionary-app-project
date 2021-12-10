import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine({ setApiResponse, defaultKeyword }) {
  const [inputInfo, setInputInfo] = useState(defaultKeyword);
  const [loaded, setLoaded] = useState(false);

  function makeApiRequest() {
    setLoaded(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputInfo}`;
    axios
      .get(apiUrl)
      .then(handleApiResponse)
      .catch(function (error) {
        console.log("error");
      });
  }

  function handleSearchInput(event) {
    setInputInfo(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    makeApiRequest();
  }

  function handleApiResponse(response) {
    setApiResponse(response.data);
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <form onSubmit={search}>
          <label className="form-label">
            What word do you want to look up?
          </label>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              autoComplete="off"
              placeholder="Search for a word (e.g. sunset, yoga...)"
              onChange={handleSearchInput}
            ></input>
            <button type="submit" className="btn btn-outline-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    makeApiRequest();
  }
}
