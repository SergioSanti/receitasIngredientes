const express = require('express');
const router = express.Router();
const receitaController = require('../controller/receita_controller'); // Caminho correto para o controller

// Rotas para receitas
router.get('/', receitaController.listar);
router.post('/', receitaController.inserir);
router.get('/:id', receitaController.buscarPorId);
router.put('/:id', receitaController.atualizar);
router.delete('/:id', receitaController.deletar);
router.get('/categoria/:categoria', receitaController.pesquisarPorCategoria);
router.get('/nome/:nome', receitaController.pesquisarPorLikeNome);

module.exports = router;
