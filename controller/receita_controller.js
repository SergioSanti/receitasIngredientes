// controller/receita_controller.js

let receitas = [];
let nextId = 1;

exports.listar = (req, res) => {
  res.json(receitas);
};

exports.inserir = (req, res) => {
  const { nome, ingredientes, instrucoes } = req.body;
  const novaReceita = { id: nextId++, nome, ingredientes, instrucoes }; // Criando o objeto diretamente
  receitas.push(novaReceita);
  res.status(201).json(novaReceita);
};

exports.buscarPorId = (req, res) => {
  const { id } = req.params;
  const receita = receitas.find(r => r.id === parseInt(id));
  if (receita) {
    res.json(receita);
  } else {
    res.status(404).send('Receita não encontrada');
  }
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { nome, ingredientes, instrucoes } = req.body;
  const receita = receitas.find(r => r.id === parseInt(id));
  if (receita) {
    receita.nome = nome;
    receita.ingredientes = ingredientes;
    receita.instrucoes = instrucoes;
    res.json(receita);
  } else {
    res.status(404).send('Receita não encontrada');
  }
};

exports.deletar = (req, res) => {
  const { id } = req.params;
  receitas = receitas.filter(r => r.id !== parseInt(id));
  res.status(204).send();
};

exports.pesquisarPorCategoria = (req, res) => {
  const { categoria } = req.params;
  const receitasFiltradas = receitas.filter(r => r.categoria === categoria);
  res.json(receitasFiltradas);
};

exports.pesquisarPorLikeNome = (req, res) => {
  const { nome } = req.params;
  const receitasFiltradas = receitas.filter(r => r.nome.toUpperCase().includes(nome.toUpperCase()));
  res.json(receitasFiltradas);
};
