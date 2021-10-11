const express = require('express');

const cors = require('cors');

const categoriasRouter = require('./api/categorias');
const livrosRouter = require('./api/livros');

const API_PORT = 3001;
const API_PATH = 'api';

const app = express();

app.use(cors());

app.use(`/${API_PATH}/categorias`, categoriasRouter);
app.use(`/${API_PATH}/livros`, livrosRouter);

app.listen(API_PORT, () => {
  console.log(`
    Servidor executando em http://localhost:${API_PORT}/${API_PATH}
  `);
});
