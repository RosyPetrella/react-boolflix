import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Card from "./components/Card";
// import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]); // per salvare i film trovati
  const [series, setSeries] = useState([]);

  return (
    <div>
      <Header setMovies={setMovies} setSeries={setSeries} />
      <Card movies={movies} series={series} />
    </div>
  );
}

export default App;
