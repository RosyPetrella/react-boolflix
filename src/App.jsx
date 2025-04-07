import { useState } from "react";
import { MovieProvider } from "./contexts/movieContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <MovieProvider>
      <div>
        <Header />
        <Card />
      </div>
    </MovieProvider>
  );
}

export default App;
