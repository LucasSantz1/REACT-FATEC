import React, { useState } from 'react';

function List3() {
  const [itens, setItens] = useState([]);
  const [entrada, setEntrada] = useState('');

  const adicionarItem = () => {
    setItens([...itens, entrada]);
    setEntrada('');
  };

  return (
    <div className="list3">
      <h3>Adicione Escultores Inspiradores:</h3>
      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Digite um nome"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {itens.map((item, indice) => (
          <li key={indice}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List3;
