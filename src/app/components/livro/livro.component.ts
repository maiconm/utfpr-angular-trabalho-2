import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  /**
   * Livro as ser exibido.
   */
  @Input()
  public livro!: Livro;
  /**
   * Livro selecionado.
   */
  @Output()
  public livroSelecionado = new EventEmitter<Livro>();
  /**
   * Emite o livro selecionado.
   * @param livro Livro selecionado.
   */
  public selecionarLivro(livro: Livro): void {
    this.livroSelecionado.emit(livro);
  }

}
