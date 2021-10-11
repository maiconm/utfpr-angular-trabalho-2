const express = require('express');
const router = express.Router();

const LIVROS = [
  {
    "_id": "fafafafa",
    "titulo": "Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso",
    "capa": "https://lojasaraiva.vteximg.com.br/arquivos/ids/12104802/1009575881.jpg?v=637142231559930000",
    "sinopse": "Napoleon Hill revela que quebrou o código mental do diabo e o forçou a confessar os seus segredos. O manuscrito que resultou deste feito - \"Mais Esperto que o Diabo\"- mostrou-se tão controverso, que acabou escondido por mais de 70 anos. Usando sua habilidade legendária para chegar a raiz do potencial humano, Hill cava profundamente para identificar os maiores obstáculos que enfrentamos na busca de nossas metas pessoais - incluindo o medo, procrastinação, a raiva e a inveja - como ferramentas orquestradas pelo próprio diabo. Esses métodos ocultos de controle podem levar-nos a ruína, e Hill revela os 7 princípios que eficazmente poderão combater a alienação e levar-nos finalmente ao triunfo e ao sucesso. Fascinante, provocativo e encorajador, \"Mais Esperto que o Diabo\" mostra como criar a sua própria senha para o sucesso, harmonia e realização em um momento de tantas incertezas e medos.",
    "autor": "Napoleon Hill",
    "editora": "Citadel Editora"
  },
  {
    "_id": "fbfbfbfb",
    "titulo": "Despertar Criativo",
    "capa": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZLjA_xrj12shksuLChiHCAjrptTIcVV1liAdVD2c-yRsuSfux3hvrejETPqw8yTb8FbfXzaYSnViS&usqp=CAc",
    "sinopse": "O caminho para criar sua vida Em Despertar criativo, você entrará em contato com a sua própria criatividade e aprenderá como usá-la a seu favor. Será capaz de criar o seu próprio caminho, sem seguir os outros, para sair de uma vida cinza para uma mais colorida. As irmãs Fernanda e Amanda serão suas guias nessa jornada em direção à inovação e à autenticidade. Para isso, você vai percorrer todos os passos do processo criativo: desde buscar inspiração até finalizar e compartilhar sua ideia com o mundo. Se você sente que precisa de uma mudança, chegou a hora de despertar e começar a criar hoje a vida que quer. A inspiração abre uma porta. Dela sopra um ar fresco e nos sentimos curiosos para ver o que se encontra lá dentro. Criar é atravessar essa porta e partir em uma longa jornada.",
    "autor": "Fernanda Longoni",
    "editora": "Outro Planeta"
  },
  {
    "_id": "fcfcfcfc",
    "titulo": "Felicidade: Modos de usar",
    "capa": "https://m.media-amazon.com/images/I/41IjL6fSSUL.jpg",
    "sinopse": "Um bate-papo entre três pensadores pop sobre um assunto que interessa a todo mundo: como ser feliz O livro é resultado do debate entre Cortella, Karnal e Pondé em comemoração aos 15 anos da Editora Planeta no Brasil, realizado em maio de 2018. Durante uma hora e meia, os três discutiram o que é felicidade, o que ela significa, que caminhos podem nos levar a sermos pessoas mais felizes. Como sempre fazem, citaram outros filósofos e pensadores, deram exemplos pessoais e terminaram mostrando que ser feliz é possível – não o tempo todo, mas é possível para todos.",
    "autor": "Mario Sergio Cortella",
    "editora": "Planeta"
  },
  {
    "_id": "fdfdfdfd",
    "titulo": "Depois de Auschwitz",
    "capa": "https://m.media-amazon.com/images/I/51hLOCajzDL.jpg",
    "sinopse": "Em seu aniversário de quinze anos, Eva é enviada para Auschwitz. Sua sobrevivência depende da sorte, da sua própria determinação e do amor de sua mãe, Fritzi. Quando Auschwitz é extinto, mãe e filha iniciam a longa jornada de volta para casa. Elas procuram desesperadamente pelo pai e pelo irmão de Eva, de quem haviam se separado.  A notícia veio alguns meses depois: tragicamente, os dois foram mortos. Este é um depoimento honesto e doloroso de uma pessoa que sobreviveu ao Holocausto. As lembranças e descrições de Eva são sensíveis e vívidas, e seu relato traz o horror para tão perto quanto poderia estar. Mas também traz a luta de Eva para viver carregando o peso de seu terrível passado, ao mesmo tempo em que inspira e motiva pessoas com sua mensagem de perseverança e de respeito ao próximo – e ainda dá continuidade ao trabalho de seu padrasto Otto, pai de Anne Frank, garantindo que o legado de Anne nunca seja esquecido.",
    "autor": "Eva Schloss",
    "editora": "Universo dos Livros"
  },
  {
    "_id": "fefefefe",
    "titulo": "O Príncipe: Texto Integral",
    "capa": "https://images-na.ssl-images-amazon.com/images/I/41OncC0qsoL._SX345_BO1,204,203,200_.jpg",
    "sinopse": "Nesta obra, que é um clássico sobre pensamento político, o grande escritor Maquiavel mostra como funciona a ciência política. Discorre sobre os diferentes tipos de Estado e ensina como um príncipe pode conquistar e manter o domínio sobre um Estado. Trata daquilo que é o seu objetivo principal: as virtudes que o governante deve adquirir e os vícios que deve evitar para manter-se no poder. Maquiavel mostra em O Príncipe que a moralidade e a ciência política são separadas. Ele aponta a contradição entre governar um Estado e, ao mesmo tempo, levar uma vida moral.",
    "autor": "Nicolau Maquiavel",
    "editora": "Edipro"
  },
  {
    "_id": "ffffffff",
    "titulo": "Como o racismo criou o Brasil",
    "capa": "https://images-na.ssl-images-amazon.com/images/I/41aj5h9bZOS._SX341_BO1,204,203,200_.jpg",
    "sinopse": "Neste livro, o sociólogo Jessé Souza mostra a versão mais madura de sua inovadora interpretação sobre a sociedade brasileira, baseada em mais de 40 anos de estudos teóricos e empíricos. Jessé é autor de mais de 30 livros e de uma centena de artigos e ensaios em vários idiomas. Entre seus maiores sucessos se destacam A elite do atraso, A classe média no espelho e A guerra contra o Brasil.",
    "autor": "Jessé Souza",
    "editora": "Estação Brasil"
  },
  {
    "_id": "fgfgfgfg",
    "titulo": "21 lições para o século 21",
    "capa": "https://images-na.ssl-images-amazon.com/images/I/41HsIZhn+UL._SX331_BO1,204,203,200_.jpg",
    "sinopse": "O novo livro do autor de Sapiens e Homo Deus explora as grandes questões do presente e o que podemos fazer para melhorá-lo. Como podemos nos proteger de guerras nucleares, cataclismos ambientais e crises tecnológicas? O que fazer sobre a epidemia de fake news ou a ameaça do terrorismo? O que devemos ensinar aos nossos filhos? Em Sapiens, Yuval Noah Harari mostrou de onde viemos; em Homo Deus, para onde vamos. 21 lições para o século 21 explora o presente e nos conduz por uma fascinante jornada pelos assuntos prementes da atualidade. Seu novo livro trata sobre o desafio de manter o foco coletivo e individual em face a mudanças frequentes e desconcertantes. Seríamos ainda capazes de entender o mundo que criamos?",
    "autor": "Yuval Noah Harari",
    "editora": "Companhia das Letras"
  },
  {
    "_id": "fhfhfhfh",
    "titulo": "Cem dias entre céu e mar",
    "capa": "https://m.media-amazon.com/images/I/41PEhaoIpnL.jpg",
    "sinopse": "Navegando ao lado dos peixes, entretendo conversas com gaivotas e tubarões, remando no meio de uma creche de baleias, Cem dias entre céu e mar é o relato de uma travessia absolutamente incomum: mais de 3500 milhas (cerca de 6500 quilômetros) desde o porto de Lüderitz, no sul da África, até a praia da Espera no litoral baiano, a bordo de um minúsculo barco a remo. Verdadeira odisséia moderna, neste livro Amyr Klink transporta o leitor para a superfície ora cinzenta, ora azulada do Atlântico Sul, tornando-o cúmplice de suas alegrias e seus temores, ao mesmo tempo em que narra, passo a passo, os preparativos, as lutas, os obstáculos e os presságios que cercaram a extraordinária viagem.",
    "autor": "Amyr Klink",
    "editora": "Companhia de Bolso"
  },
  {
    "_id": "fifififi",
    "titulo": "A incrível viagem de Shackleton",
    "capa": "https://m.media-amazon.com/images/I/41FJzyVWWgL.jpg",
    "sinopse": "No verão de 1914, Sir Ernest Shackleton parte a bordo do Endurance em direção ao Atlântico Sul. O objetivo de sua expedição era cruzar o continente antártico, passando pelo Pólo Sul. Mas, a apenas um dia do ponto de desembarque planejado, o Endurance fica aprisionado num banco de gelo no mar de Weddell e acaba sendo destruído. Por quase seis meses, Shackleton e sua tripulação sobrevivem em placas de gelo em uma das mais inóspitas regiões do mundo, até que conseguem iniciar sua tentativa de retorno à civilização nos botes salva-vidas. Através dos diários e entrevistas com alguns membros da expedição, Alfred Lansing reconstrói as dificuldades que a tripulação do Endurance enfrentou. Em uma narrativa fascinante, Lansing descreve como Shackleton conseguiu que, após quase dois anos do início da viagem, todos retornassem com vida.",
    "autor": "Alfred Lansing",
    "editora": "Editora Sextante"
  }
];

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.json(LIVROS.find(livro => livro._id === id));
});

module.exports = router;
