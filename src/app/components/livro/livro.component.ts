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

  @Input()
  public livro!: Livro;

  @Output()
  public livroSelecionado = new EventEmitter<Livro>();

  public selecionarLivro(livro: Livro): void {
    this.livroSelecionado.emit(livro);
  }

}
