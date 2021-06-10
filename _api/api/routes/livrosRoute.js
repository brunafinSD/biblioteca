const { Router } = require ('express');
const LivroController = require ('../controllers/LivroController');

const router = Router();

router.get('/livros', LivroController.listarTodosLivros);
router.get('/livro/:id', LivroController.listarLivroPeloId);
router.get('/livro', LivroController.listarLivroPeloNome);
router.post('/livros/', LivroController.criarLivro);
router.put('/livro/:id', LivroController.editarLivro);
router.delete('/livro/:id', LivroController.deletarLivro);

module.exports = router;