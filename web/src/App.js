import './App.css';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario/Formulario';
import FormularioAutor from './components/Formulario/FormularioAutor';
import Tabela from './components/Tabela/Tabela'
import LivroService from './services/LivroService';
import AutorService from './services/AutorService';


function App() {
  const [livros, setLivros] = useState([]);
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    LivroService.buscarLivros().then((result) => {
      setLivros(result);
    }).catch(() => {
      console.log('cai no erro');
    });

    AutorService.buscarAutores().then((result) => {
      setAutores(result);
    }).catch(() => {
      console.log('cai no erro de autor');
    });
  }, []);


  const cadastrarLivro = async (dados) => {
    const dadosCadastro = {
      titulo: dados.titulo,
      status: dados.status,
      observacoes: dados.observacoes,
      ano: dados.ano,
      AutoreId: dados.autor
    }
    await LivroService.criarLivro(dadosCadastro).then((result) => {
      const { AutoreId } = result;
      const buscaNomeAutor = autores.find((autor) => autor.id === Number(AutoreId));
      const { nome } = buscaNomeAutor;
      const addNomeLista = { nome: nome }
      result.Autore = addNomeLista;
      setLivros([...livros, result]);
    }).catch(() => {
      console.log('Não foi possível cadastrar o livro');
    });
  };

  const deletarLivro = async (id) => {
    await LivroService.deletarLivro(id).then((result) => {
      const apagaDaLista = livros.filter((livro) => !(livro.id === Number(result)));
      setLivros(apagaDaLista);
    }).catch(() => {
      console.log('não consegui deletar');
    })
  }

  const editarLivro = async (id) => {
    console.log('recebi o livro para editar', id);
  }

  const cadastrarAutor = async (dados) => {
    await AutorService.criarAutor(dados).then((result) => {
      console.log(`autor criado ${result}`);
    })
  }


  return (
    <div className="container">
      <div className="content-formularios">
        <FormularioAutor
          title="Cadastro de Autores"
          cadastrarAutor={cadastrarAutor}
        />
        <Formulario
          title="Cadastro de Livros"
          cadastrarLivro={cadastrarLivro}
          autores={autores}
        />
      </div>
      <div className="content-table">
        <h1>Livros da biblioteca</h1>
        <Tabela
          livros={livros}
          deletarLivro={deletarLivro}
          editarLivro={editarLivro}
        />
      </div>
    </div>
  );
}

export default App;
