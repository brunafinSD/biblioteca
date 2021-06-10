import React from 'react';
import './tabela.css';

function Tabela({ livros, deletarLivro, atualizarListaLivros, editarLivro }) {
  return (
    <table border="1">
      <thead className="table-header">
        <tr>
          <th>código</th>
          <th>nome do livro</th>
          <th>nome do autor</th>
          <th>ano</th>
          <th>disponível</th>
          <th>observações</th>
          <th>ações</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {livros.map((livro, index) => {
          return (
            <tr key={index}>
              <td>{livro.id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.Autore.nome}</td>
              <td>{livro.ano}</td>
              <td>{livro.status ? 'Sim' : 'Não'}</td>
              <td>{livro.observacoes}</td>
              <td>
                <button
                  onClick={() => console.log('abrindo detalhes')}
                  disabled
                >detalhes</button>
                <button
                  onClick={() => editarLivro(livro.id)}
                >editar</button>
                <button
                  className="btn-excluir"
                  onClick={() => {
                    deletarLivro(livro.id)
                    // atualizarListaLivros();
                  }}

                >excluir</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table >
  );
}
export default Tabela;