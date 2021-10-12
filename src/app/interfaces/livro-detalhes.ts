import { Livro } from './livro';

export interface LivroDetalhes extends Livro {
  /**
   * Sinopse do livro.
   */
  sinopse: string;
  /**
   * Autor do livro.
   */
  autor: string;
  /**
   * Editora do livro.
   */
  editora: string;
}
