import SearchBar from "./SearchBar";

export default function Header({ setMovies, setSeries }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="logo">
          <a className="navbar-brand" href="#">
            Boolflix
          </a>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        <div>
          <SearchBar setMovies={setMovies} setSeries={setSeries} />
        </div>
      </div>
    </nav>
  );
}
