import { Livro } from './livro';

export class Categoria {
  constructor(
    /**
     * Id da categoria.
     */
    public id: string,
    /**
     * Nome da categoria.
     */
    public nome: string,
    /**
     * Livros da categoria.
     */
    public livros: Livro[],
  ) {
  }
}
