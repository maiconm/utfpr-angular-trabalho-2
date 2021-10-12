import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria as ICategoria } from '../interfaces/categoria';
import { Livro as ILivro } from '../interfaces/livro';
import { LivroDetalhes as ILivroDetalhes} from '../interfaces/livro-detalhes';
import { Categoria } from '../models/categoria';
import { Livro } from '../models/livro';
import { LivroDetalhes } from '../models/livro-detalhes';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient,
  ) { }

  public getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<ICategoria[]>(`${this.baseUrl}/categorias`).pipe(
      map(
        iCategorias => (
          iCategorias.map(
            iCategoria => this.iCategoriaToCategoria(iCategoria)
          )
        )
      ),
    );
  }

  public getLivroDetalhes(id: string): Observable<LivroDetalhes> {
    return this.httpClient.get<ILivroDetalhes>(`${this.baseUrl}/livros/${id}`).pipe(
      map(this.iLivroDetalheToLivroDetalhe),
    );
  }

  private iLivroDetalheToLivroDetalhe(iLivroDetalhes: ILivroDetalhes): LivroDetalhes {
    return new LivroDetalhes(
      iLivroDetalhes._id,
      iLivroDetalhes.titulo,
      iLivroDetalhes.capa,
      iLivroDetalhes.sinopse,
      iLivroDetalhes.autor,
      iLivroDetalhes.autor,
    );
  }

  private iCategoriaToCategoria({ _id, nome, livros }: ICategoria): Categoria {
    return new Categoria(
      _id,
      nome,
      livros.map(livro => this.iLivroToLivro(livro))
    );
  }

  private iLivroToLivro({ _id, titulo, capa }: ILivro): Livro {
    return new Livro(
      _id,
      titulo,
      capa,
    );
  }
}
