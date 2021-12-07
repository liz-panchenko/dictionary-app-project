import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import KeywordResults from "./KeywordResults";

export default function App() {
  const [apiRespose, setApiResponse] = useState(null);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main-container">
          <h1>Dictionary App</h1>
          <SearchEngine setApiResponse={setApiResponse} />
          <KeywordResults apiRespose={apiRespose} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
