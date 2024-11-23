import React from 'react';

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div className="toolbar">
      <button onClick={onPlayMovie}>Reproduzir Filme</button>
      <button onClick={onUploadImage}>Enviar Imagem</button>
    </div>
  );
}

export default Toolbar;
