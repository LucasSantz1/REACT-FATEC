import React, { useState } from 'react';

function Gallery() {
  const esculturas = [
    { nome: "Homenagem à Neurocirurgia", artista: "Marta Colvin Andrade" },
    { nome: "Floralis Genérica", artista: "Eduardo Catalano" },
    { nome: "O Pensador", artista: "Auguste Rodin" },
  ];

  const [indice, setIndice] = useState(0);

  const proximaEscultura = () => {
    setIndice((indice + 1) % esculturas.length);
  };

  return (
    <div className="gallery">
      <h3>{esculturas[indice].nome}</h3>
      <p>Artista: {esculturas[indice].artista}</p>
      <button onClick={proximaEscultura}>Próxima Escultura</button>
    </div>
  );
}

export default Gallery;
