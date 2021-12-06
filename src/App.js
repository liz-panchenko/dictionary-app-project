import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main-container">
          <h1>Dictionary App</h1>
          <form className="row p-2 gap-3 justify-content-center">
            <input
              type="search"
              className="form-control w-50 col-8"
              placeholder="Search for a word"
            ></input>
            <button type="submit" className="btn btn-primary col-2">
              Search
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
