import { Livro } from './livro';

export class Categoria {
  constructor(
    public id: string,
    public nome: string,
    public livros: Livro[],
  ) {
  }
}
