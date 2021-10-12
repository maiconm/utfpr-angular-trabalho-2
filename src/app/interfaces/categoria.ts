import { Livro } from './livro';

export interface Categoria {
  /**
   * Id da categoria.
   */
  _id: string;
  /**
   * Nome da categoria.
   */
  nome: string;
  /**
   * Livros da categoria.
   */
  livros: Livro[];
}
