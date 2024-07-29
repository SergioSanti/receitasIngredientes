const express = require('express');
const app = express();

const receitaRouter = require('./rotas/receita_rotas');
const loginController = require('./controller/login_controller');
const middlewareAcesso = require('./middleware/acesso_middleware');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method+" "+req.originalUrl);
  next();
})

app.post("/api/login", loginController.realizarLogin);

app.use("/api/receitas", middlewareAcesso.verificarAcesso, receitaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
