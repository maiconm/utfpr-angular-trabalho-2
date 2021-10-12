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

  @Output()
  public livroSelecionado = new EventEmitter<Livro>();

  public categorias$: Observable<Categoria[]>;

  constructor(
    private livroService: LivroService,
  ) {
    this.categorias$ = this.livroService.getCategorias();
  }

  public selecionarLivro(livro: Livro): void {
    this.livroSelecionado.emit(livro);
  }

}
