import React, { useState } from 'react';

function Form3() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    titulo: '',
    cidade: '',
    imagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  return (
    <div>
      <label>
        Nome:
        <input type="text" name="nome" value={dadosFormulario.nome} onChange={handleChange} />
      </label>
      <label>
        Título:
        <input type="text" name="titulo" value={dadosFormulario.titulo} onChange={handleChange} />
      </label>
      <label>
        Cidade:
        <input type="text" name="cidade" value={dadosFormulario.cidade} onChange={handleChange} />
      </label>
      <label>
        Imagem:
        <input type="text" name="imagem" value={dadosFormulario.imagem} onChange={handleChange} />
      </label>
      <p>
        <b>{dadosFormulario.nome}</b> - {dadosFormulario.titulo} ({dadosFormulario.cidade})
      </p>
      {dadosFormulario.imagem && <img src={dadosFormulario.imagem} alt={dadosFormulario.titulo} style={{ width: '200px' }} />}
    </div>
  );
}

export default Form3;
