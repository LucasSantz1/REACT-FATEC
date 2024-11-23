import React, { useState } from 'react';

function Form() {
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada: ${mensagem}`);
  };

  return (
    <form onSubmit={enviarMensagem}>
      <label>
        Para:
        <input type="text" name="destinatario" />
      </label>
      <label>
        Mensagem:
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
