const { Router } = require ('express');
const AutorController = require ('../controllers/AutorController');

const router = Router();

router.get('/autores', AutorController.listarTodosAutores);
router.get('/autor/:id', AutorController.listarAutorPeloId);
router.get('/autor', AutorController.listarAutorPeloNome);
router.post('/autores/', AutorController.criarAutor);
router.put('/autor/:id', AutorController.editarAutor);
router.delete('/autor/:id', AutorController.deletarAutor);

module.exports = router;