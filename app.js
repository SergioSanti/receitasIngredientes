const express = require('express');
const app = express();

const receitaRoutes = require('./rotas/receita_rotas');
const ingredienteRoutes = require('./rotas/ingrediente_rotas');

app.use(express.json());

app.use('/receitas', receitaRoutes);
app.use('/ingredientes', ingredienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
