import "./App.css";

export default function App() {
  return (
    <div className="App container-fluid">
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
  );
}
