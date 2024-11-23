import React, { useState } from 'react';

function BucketList() {
  const [listaArte, setListaArte] = useState(['Picasso', 'Van Gogh', 'Frida Khalo']);
  const [minhaLista, setMinhaLista] = useState([]);

  const adicionarAMinhaLista = (item) => {
    if (!minhaLista.includes(item)) {
      setMinhaLista([...minhaLista, item]);
    }
  };

  return (
    <div>
      <h3>Lista de Arte</h3>
      <ul>
        {listaArte.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => adicionarAMinhaLista(item)}>Adicionar à Minha Lista</button>
          </li>
        ))}
      </ul>
      <h3>Sua lista de arte para ver:</h3>
      <ul>
        {minhaLista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
