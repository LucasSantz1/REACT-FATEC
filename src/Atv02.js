// Atv02.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Atv02.css';

function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const resetarContadores = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-app">
      <h2>Atividade 02: Contador de Pessoas</h2>
      <div className="total">
        <h3>Total: {homens + mulheres}</h3>
        <button onClick={resetarContadores} className="reset-button">🔄 Resetar</button>
      </div>
      <div className="contadores">
        <Contador
          titulo="Homens"
          imagem="/imagens/homem1.png"
          contador={homens}
          incrementar={() => setHomens(homens + 1)}
          decrementar={() => setHomens(Math.max(homens - 1, 0))}
        />
        <Contador
          titulo="Mulheres"
          imagem="/imagens/mulher.png"
          contador={mulheres}
          incrementar={() => setMulheres(mulheres + 1)}
          decrementar={() => setMulheres(Math.max(mulheres - 1, 0))}
        />
      </div>
      <Link to="/" className="voltar-link">Voltar</Link>
    </div>
  );
}

function Contador({ titulo, imagem, contador, incrementar, decrementar }) {
  return (
    <div className="contador">
      <h4>{titulo}</h4>
      <img src={imagem} alt={titulo} />
      <div className="counter-controls">
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}

export default Atv02;
