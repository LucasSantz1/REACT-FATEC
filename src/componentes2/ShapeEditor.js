import React, { useState } from 'react';

function ShapeEditor() {
  const [formas, setFormas] = useState([
    { tipo: 'círculo', x: 50, y: 50 },
    { tipo: 'quadrado', x: 100, y: 100 },
  ]);

  const moverFormas = () => {
    setFormas(
      formas.map((forma) => ({
        ...forma,
        x: forma.x + 10,
        y: forma.y + 10,
      }))
    );
  };

  return (
    <div className="shape-editor">
      <h3>Mova as Formas:</h3>
      <button onClick={moverFormas}>Mover</button>
      <div>
        {formas.map((forma, indice) => (
          <div
            key={indice}
            style={{
              position: 'absolute',
              left: forma.x,
              top: forma.y,
              width: 50,
              height: 50,
              borderRadius: forma.tipo === 'círculo' ? '50%' : '0',
              backgroundColor: 'purple',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ShapeEditor;
