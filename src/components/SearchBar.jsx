import { useState } from "react";
export default function SearchBar({ setMovies, setSeries }) {
  const [query, setQuery] = useState("");

  const search = () => {
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY; // 👈recupera la chiave dal file .env
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
    const base_series_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`;

    fetch(base_movies_api_url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Errore nella ricerca:", error));

    fetch(base_series_api_url)
      .then((res) => res.json())
      .then((data) => setSeries(data.results))
      .catch((error) => console.error("Errore nella ricerca:", error));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Cerca un film o una serie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Cerca</button>
      </div>
    </>
  );
}
