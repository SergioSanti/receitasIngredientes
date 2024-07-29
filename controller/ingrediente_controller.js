const categoriaService = require('../service/ingrediente_service');

let ingredientes = [];
let nextId = 1;

exports.listarIngredientes = (req, res) => {
  res.json(ingredientes);
};

exports.inserirIngrediente = (req, res) => {
  const { nome } = req.body;
  const novoIngrediente = new Ingrediente(nextId++, nome);
  ingredientes.push(novoIngrediente);
  res.status(201).json(novoIngrediente);
};

exports.buscarIngredientePorId = (req, res) => {
  const { id } = req.params;
  const ingrediente = ingredientes.find(i => i.id === parseInt(id));
  if (ingrediente) {
    res.json(ingrediente);
  } else {
    res.status(404).send('Ingrediente não encontrado');
  }
};

exports.atualizarIngrediente = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const ingrediente = ingredientes.find(i => i.id === parseInt(id));
  if (ingrediente) {
    ingrediente.nome = nome;
    res.json(ingrediente);
  } else {
    res.status(404).send('Ingrediente não encontrado');
  }
};

exports.deletarIngrediente = (req, res) => {
  const { id } = req.params;
  ingredientes = ingredientes.filter(i => i.id !== parseInt(id));
  res.status(204).send();
};
