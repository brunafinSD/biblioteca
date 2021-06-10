const database = require('../models');
const sequelize = require('sequelize')
const Op = sequelize.Op;

class AutorController {
  static async listarTodosAutores(req, res) {
    try {
      const todosAutores = await database.Autores.findAll();
      return res.status(200).json(todosAutores);
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }

  static async listarAutorPeloId(req, res) {
    const { id } = req.params
    try {
      const autorEncontrado = await database.Autores.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(autorEncontrado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarAutorPeloNome(req, res) {
    const { nome } = req.body
    try {
      const autorEncontrado = await database.Autores.findAll({
        where: {
          nome: {[Op.like]: `%${nome}%`}
        }
      });
      return res.status(200).json(autorEncontrado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarAutor(req, res) {
    const novoAutor = req.body
    try {
      const novoAutorCriado = await database.Autores.create(novoAutor);
      return res.status(201).json(novoAutorCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async editarAutor(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Autores.update(novasInfos, { where: { id: Number(id) } });
      const autorAtualizado = await database.Autores.findOne({ where: { id: Number(id) } });
      return res.status(200).json(autorAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarAutor(req, res) {
    const { id } = req.params
    try {
      await database.Autores.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`O autor de ID ${id} foi deletado com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AutorController;