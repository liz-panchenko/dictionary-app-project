import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import KeywordResults from "./KeywordResults";

export default function App() {
  const [dictionaryApiRespose, setDictionaryApiResponse] = useState(null);
  const [pexelsApiResponse, setPexelsApiResponse] = useState(null);
  const [error, setError] = useState(false);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main-container">
          <h1>Dictionary App 📚</h1>
          <SearchEngine
            setError={setError}
            setDictionaryApiResponse={setDictionaryApiResponse}
            setPexelsApiResponse={setPexelsApiResponse}
            defaultKeyword="dictionary"
          />
          <KeywordResults
            error={error}
            dictionaryApiRespose={dictionaryApiRespose}
            pexelsApiResponse={pexelsApiResponse}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
