import axios from '../middlewares/axios';

class AutorService {
  static buscarAutores() {
    const url = '/autores';
    return axios.get(url)
      .then((responde) => responde.data)
      .catch((error) => { throw error; });
  }

  static criarAutor(dados) {
    const url = '/autores';
    return axios.post(url, dados)
      .then((response) => response.data)
      .catch((error) => { throw error; });
  }
}



export default AutorService;