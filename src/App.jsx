// Milestone 0:
// Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
// precedenti.

// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
// bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1.  Titolo
// 2.  Titolo Originale
// 3.  Lingua
// 4.  Voto

import { useState } from "react";

function App() {
  // per memorizzare il valore dell'input
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); // per salvare i film trovati

  const searchMovies = () => {
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY; // 👈recupera la chiave dal file .env
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`; // 👈usa il template literal per passare la chiave API

    fetch(base_movies_api_url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Errore nella ricerca:", error));
  };

  return (
    <div>
      <h1>Boolflix</h1>
      <div>
        {/* nome film */}
        <input
          type="text"
          placeholder="Cerca un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Cerca</button>
      </div>

      <div>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Titolo Originale: {movie.original_title}</p>
              <p>Lingua: {movie.original_language}</p>
              <p>Voto: {movie.vote_average}</p>
            </div>
          ))
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>
    </div>
  );
}

export default App;
