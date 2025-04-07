import { useState } from "react";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); // per salvare i film trovati
  const [series, setSeries] = useState([]);

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

  const flags = {
    en: "🇬🇧",
    it: "🇮🇹",
    fr: "🇫🇷",
    es: "🇪🇸",
    de: "🇩🇪",
    ja: "🇯🇵",
    zh: "🇨🇳",
    ko: "🇰🇷",
    ru: "🇷🇺",
    hi: "🇮🇳",
  };

  function getFlag(langCode) {
    return flags[langCode] || "🏳️"; // bandiera bianca se non trovata
  }

  const getImageUrl = (path) => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w342"; // dimensione dell'immagine (w342)
    return path ? baseImageUrl + path : null; // restituisce l'URL completo
  };

  // Funzione per trasformare il voto da 1-10 a 1-5
  const convertRating = (rating) => {
    return Math.ceil(rating / 2); // Arrotonda per eccesso
  };

  // Funzione per mostrare le stelle
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = convertRating(rating); // Ottieni il numero di stelle piene
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(
          <i
            key={i}
            className="bi bi-star-fill"
            style={{ color: "#FFD700" }}
          ></i>
        ); // Stella piena
      } else {
        stars.push(
          <i key={i} className="bi bi-star" style={{ color: "#FFD700" }}></i>
        ); // Stella vuota
      }
    }

    return stars;
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

      <div>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width="200"
              />
              <h2>{movie.title}</h2>
              <p>Titolo Originale: {movie.original_title}</p>
              <p>
                Lingua: {getFlag(movie.original_language)} (
                {movie.original_language})
              </p>
              <p>Voto: {renderStars(movie.vote_average)} </p>
            </div>
          ))
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>

      <div>
        {Array.isArray(series) && series.length > 0 ? (
          series.map((serie) => (
            <div key={serie.id}>
              <img
                src={getImageUrl(serie.poster_path)}
                alt={serie.name}
                width="200"
              />
              <h2>{serie.name}</h2>
              <p>Titolo Originale: {serie.orginal_name}</p>
              <p>
                Lingua: {getFlag(serie.original_language)} (
                {serie.original_language})
              </p>
              <p>Voto: {renderStars(serie.vote_average)} </p>
            </div>
          ))
        ) : (
          <p>Nessuna serie trovata.</p>
        )}
      </div>
    </>
  );
}
