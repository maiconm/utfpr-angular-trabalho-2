import { Livro } from './livro';

export class LivroDetalhes extends Livro {
  constructor(
    public id: string,
    public titulo: string,
    public capa: string,
    /**
     * Sinopse do livro.
     */
    public sinopse: string,
    /**
     * Autor do livro.
     */
    public autor: string,
    /**
     * Editora do livro.
     */
    public editora: string,
  ){
    super(
      id,
      titulo,
      capa,
    );
  }
}
