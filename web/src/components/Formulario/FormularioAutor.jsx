import React, { useState } from 'react';
import './formulario.css';

function FormularioAutor({ cadastrarAutor, title  }) {
  const [nome, setNome] = useState('');

  const limparCampos = () => {
    setNome('');
  }

  const handleSubmit = (event) => {
    cadastrarAutor({ nome });
    limparCampos();
  }

  return (
    <form
      className="form-cadastro"
      onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <label>Nome</label>
      <input type="text" value={nome} onChange={(event) => { setNome(event.target.value) }} />
      <button className="btn-submit" type="submit">cadastrar</button>
    </form>
  );
}
export default FormularioAutor;