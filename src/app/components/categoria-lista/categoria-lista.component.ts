import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent {
  /**
   * Livro selecionado.
   */
  @Output()
  public livroSelecionado = new EventEmitter<Livro>();
  /**
   * Categorias.
   */
  public categorias$: Observable<Categoria[]>;

  constructor(
    /**
     * Faz conexão com as APIs e converte as interfaces para models.
     */
    private livroService: LivroService,
  ) {
    this.categorias$ = this.livroService.getCategorias();
  }
  /**
   * Emite o livro selecionado.
   * @param livro Livro selecionado.
   */
  public selecionarLivro(livro: Livro): void {
    this.livroSelecionado.emit(livro);
  }

}
