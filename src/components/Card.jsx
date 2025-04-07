export default function Card({ movies, series }) {
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

  const convertRating = (rating) => {
    return Math.ceil(rating / 2);
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

  const renderCard = (item, isMovie = true) => {
    const title = isMovie ? item.title : item.name;
    const originalTitle = isMovie ? item.original_title : item.original_name;

    return (
      <div
        key={item.id}
        className="card"
        style={{
          backgroundImage: `url(${getImageUrl(item.poster_path)})`,
        }}
      >
        <div className="card-overlay">
          <h2>{title}</h2>
          <p>Titolo Originale: {originalTitle}</p>
          <p>
            Lingua: {getFlag(item.original_language)} ({item.original_language})
          </p>
          <p>Voto: {renderStars(item.vote_average)}</p>
          <p className="overview">{item.overview}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="cards-container">
      {movies && movies.length > 0 && (
        <>
          <h2 className="section-title">Film</h2>
          <div className="movies-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="card">
                <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                <div className="card-overlay">
                  <h2>{movie.title}</h2>
                  <p>Titolo Originale: {movie.original_title}</p>
                  <p>
                    Lingua: {getFlag(movie.original_language)} (
                    {movie.original_language})
                  </p>
                  <p>Voto: {renderStars(movie.vote_average)}</p>
                  <p className="overview">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {series && series.length > 0 && (
        <>
          <h2 className="section-title">Serie TV</h2>
          <div className="series-grid">
            {series.map((serie) => (
              <div key={serie.id} className="card">
                <img src={getImageUrl(serie.poster_path)} alt={serie.name} />
                <div className="card-overlay">
                  <h2>{serie.name}</h2>
                  <p>Titolo Originale: {serie.original_name}</p>
                  <p>
                    Lingua: {getFlag(serie.original_language)} (
                    {serie.original_language})
                  </p>
                  <p>Voto: {renderStars(serie.vote_average)}</p>
                  <p className="overview">{serie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
