import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [inputInfo, setInputInfo] = useState(null);
  function handleSearchInput(event) {
    setInputInfo(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for "${inputInfo}"`);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <label className="form-label">What word do you want to look up?</label>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            autoComplete="off"
            placeholder="Search for a word"
            id="search-input"
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
}
