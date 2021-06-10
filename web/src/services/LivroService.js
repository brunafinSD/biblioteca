import axios from '../middlewares/axios';

class LivroService {
  static buscarLivros() {
    const url = '/livros';
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }

  static buscarLivroPeloId(id) {
    const url = `/livro/${id}`;
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }

  static buscarLivroPeloNome() {
    const url = '/livro';
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }

  static criarLivro(dados) {
    const url = '/livros';
    return axios.post(url, dados)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }
  static editarLivro(id) {
    const url = `/livro/${id}`;
    return axios.put(url)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }
  static deletarLivro(id) {
    const url = `/livro/${id}`;
    return axios.delete(url)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }
}

export default LivroService;