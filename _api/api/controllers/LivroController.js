const database = require('../models');
const sequelize = require('sequelize');

const Op = sequelize.Op;

class LivroController { //lista livros com seus autores
  static async listarTodosLivros(req, res) {
    try {
      const todosLivros = await database.Livros.findAll({
        include: [{
            model: database.Autores,
            attributes: ['nome']
        }]
    }
      );
      return res.status(200).json(todosLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }

  static async listarLivroPeloId(req, res) {
    const { id } = req.params
    try {
      const livroEncontrado = await database.Livros.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(livroEncontrado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarLivroPeloNome(req, res) {
    const { nome } = req.body
    try {
      const livroEncontrado = await database.Livros.findAll({
        where: {
          titulo: { [Op.like]: `%${nome}%` }
        }
      });
      return res.status(200).json(livroEncontrado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarLivro(req, res) {
    const novoLivro = req.body
    try {
      const novoLivroCriado = await database.Livros.create(novoLivro);
      return res.status(201).json(novoLivroCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async editarLivro(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Livros.update(novasInfos, { where: { id: Number(id) } });
      const livroAtualizado = await database.Livros.findOne({ where: { id: Number(id) } });
      return res.status(200).json(livroAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarLivro(req, res) {
    const { id } = req.params
    try {
      await database.Livros.destroy({ where: { id: Number(id) } });
      return res.status(200).json(id);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivroController;