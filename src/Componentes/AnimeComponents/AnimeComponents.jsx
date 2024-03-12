import React, { useState } from "react";

function AnimeComponents() {
  const [animeName, setAnimeName] = useState("one punch");
  const [animeDigitado, setAnimeDigitado] = useState("one punch");

  const hadleInputChange = (e) => {
    setAnimeDigitado(e.targe.value);
  };

  function BuscarOAnime() {
    setAnimeDigitado(animeDigitado);
  }

  return (
    <div>
      <input
        ytpe="text"
        placeholder="Coloque o nome do anime"
        value={animeDigitado}
        onChange={hadleInputChange}
      ></input>
      <button onClick={() => BuscarOAnime()}> Pesquisar </button>

      {Array.isArray(mockAnime) ? (
        <div>
          {mockAnime.map((a) => (
            <h1 key={a.id}>{a.title}</h1>
          ))}
        </div>
      ) : (
        mockAnime && <div> Sem nenhum anime</div>
      )}
    </div>
  );
}

export default AnimeComponents;
