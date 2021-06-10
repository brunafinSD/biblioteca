import React, { useState } from 'react';
import './formulario.css';

function Formulario({ cadastrarLivro, autores, atualizarListaLivros, title  }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [status, setStatus] = useState(true);
  const [observacoes, setObservacoes] = useState('');

  const limparCampos = () => {
    setTitulo('');
    setAutor('');
    setAno('');
    setObservacoes('');
    setStatus(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastrarLivro({ titulo, autor, status, ano, observacoes });
    // atualizarListaLivros();
    limparCampos();
  }

  return (
    <form
      className="form-cadastro"
      onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <label>Nome do livro</label>
      <input type="text" value={titulo} onChange={(event) => { setTitulo(event.target.value) }} />
      <label>Autor</label>
      <select name="select" value={autor} onChange={(event) => { setAutor(event.target.value) }}>
        <option value="" disabled >Selecione o autor</option>
        {autores.map((autor, index) => {
          return (
            <option value={autor.id} key={index}>{autor.nome}</option>)
        })};
      </select>
      <label>Ano</label>
      <input type="number" min="1400" value={ano} onChange={(event) => { setAno(event.target.value) }} />
      <label>Observações</label>
      <input type="textarea" value={observacoes} onChange={(event) => { setObservacoes(event.target.value) }} />
      <label className="titulo">Disponível</label>
      <div className="form-status">
        <div>
          <label>Sim</label>
          <input name="status" type="radio" value={status} onChange={() => { setStatus(true) }} checked={status === true} />
        </div>
        <div>
          <label>Não</label>
          <input name="status" type="radio" value={status} onChange={() => { setStatus(false) }} checked={status === false} />
        </div>
      </div>
      <button className="btn-submit" type="submit">cadastrar</button>
    </form>
  );
}
export default Formulario;