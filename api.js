const express = require('express');

const cors = require('cors');

const turmasRouter = require('./api/categorias');

const API_PORT = 3001;
const API_PATH = 'api';

const app = express();

app.use(cors());

app.use(`/${API_PATH}/categorias`, turmasRouter);

app.listen(API_PORT, () => {
  console.log(`
    Servidor executando em http://localhost:${API_PORT}/${API_PATH}
  `);
});
