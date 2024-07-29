// routes/ingredienteRoutes.js
const express = require('express');
const router = express.Router();
const ingredienteController = require('../controller/ingrediente_controller');

router.get('/', ingredienteController.listarIngredientes);
router.post('/', ingredienteController.inserirIngrediente);
router.get('/:id', ingredienteController.buscarIngredientePorId);
router.put('/:id', ingredienteController.atualizarIngrediente);
router.delete('/:id', ingredienteController.deletarIngrediente);

module.exports = router;
