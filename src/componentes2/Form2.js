import React, { useState } from 'react';

function Form2() {
  const [dadosFormulario, setDadosFormulario] = useState({
    primeiroNome: '',
    sobrenome: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  return (
    <div>
      <label>
        Primeiro Nome:
        <input type="text" name="primeiroNome" value={dadosFormulario.primeiroNome} onChange={handleChange} />
      </label>
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" value={dadosFormulario.sobrenome} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={dadosFormulario.email} onChange={handleChange} />
      </label>
      <p>
        {dadosFormulario.primeiroNome} {dadosFormulario.sobrenome} ({dadosFormulario.email})
      </p>
    </div>
  );
}

export default Form2;
