const express = require('express');
const router = express.Router();

const CATEGORIAS = [
  {
    "_id": "fafafafa",
    "nome": "autoajuda",
    "livros": [
      {
        "_id": "fafafafa",
        "titulo": "Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso",
        "capa": "https://lojasaraiva.vteximg.com.br/arquivos/ids/12104802/1009575881.jpg?v=637142231559930000"
      },
      {
        "_id": "fbfbfbfb",
        "titulo": "Despertar Criativo",
        "capa": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZLjA_xrj12shksuLChiHCAjrptTIcVV1liAdVD2c-yRsuSfux3hvrejETPqw8yTb8FbfXzaYSnViS&usqp=CAc"
      },
      {
        "_id": "fcfcfcfc",
        "titulo": "Felicidade: Modos de usar",
        "capa": "https://m.media-amazon.com/images/I/41IjL6fSSUL.jpg"
      }
    ]
  },
  {
    "_id": "fbfbfbfb",
    "nome": "história",
    "livros": [
      {
        "_id": "fdfdfdfd",
        "titulo": "Depois de Auschwitz",
        "capa": "https://m.media-amazon.com/images/I/51hLOCajzDL.jpg"
      },
      {
        "_id": "fefefefe",
        "titulo": "O Príncipe: Texto Integral",
        "capa": "https://images-na.ssl-images-amazon.com/images/I/41OncC0qsoL._SX345_BO1,204,203,200_.jpg"
      },
      {
        "_id": "ffffffff",
        "titulo": "Como o racismo criou o Brasil",
        "capa": "https://images-na.ssl-images-amazon.com/images/I/41aj5h9bZOS._SX341_BO1,204,203,200_.jpg"
      },
      {
        "_id": "fgfgfgfg",
        "titulo": "21 lições para o século 21",
        "capa": "https://images-na.ssl-images-amazon.com/images/I/41HsIZhn+UL._SX331_BO1,204,203,200_.jpg"
      }
    ]
  },
  {
    "_id": "fcfcfcfc",
    "nome": "viagens",
    "livros": [
      {
        "_id": "fhfhfhfh",
        "titulo": "Cem dias entre céu e mar",
        "capa": "https://m.media-amazon.com/images/I/41PEhaoIpnL.jpg"
      },
      {
        "_id": "fifififi",
        "titulo": "A incrível viagem de Shackleton",
        "capa": "https://m.media-amazon.com/images/I/41FJzyVWWgL.jpg"
      }
    ]
  },
  {
    "_id": "fdfdfdfd",
    "nome": "ciências",
    "livros": [
    ]
  }
]

router.get('/', function(req, res, next) {
  res.json(CATEGORIAS);
});

module.exports = router;
