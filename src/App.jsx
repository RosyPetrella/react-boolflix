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
  // Stato per memorizzare il valore dell'input
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>React Boolflix</h1>
      <div>
        {/* nome film */}
        <input
          type="text"
          placeholder="Cerca un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => console.log("Cerco:", query)}>Cerca</button>
      </div>
    </div>
  );
}

export default App;
