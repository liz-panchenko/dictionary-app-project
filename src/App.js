import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import KeywordResults from "./KeywordResults";

export default function App() {
  const [dictionaryApiRespose, setDictionaryApiResponse] = useState(null);
  const [pexelsApiResponse, setPexelsApiResponse] = useState(null);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main-container">
          <h1>Dictionary App 📚</h1>
          <SearchEngine
            setDictionaryApiResponse={setDictionaryApiResponse}
            setPexelsApiResponse={setPexelsApiResponse}
            defaultKeyword="dictionary"
          />
          <KeywordResults
            dictionaryApiRespose={dictionaryApiRespose}
            pexelsApiResponse={pexelsApiResponse}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
