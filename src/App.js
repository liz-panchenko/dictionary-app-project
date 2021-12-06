import "./App.css";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main-container">
          <h1>Dictionary App</h1>
          <SearchEngine />
        </div>
        <Footer />
      </div>
    </div>
  );
}
