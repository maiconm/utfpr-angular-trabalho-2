import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LivroDetalhes } from 'src/app/models/livro-detalhes';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.css']
})
export class LivroDetalhesComponent {
  /**
   * Detalhes do livro a ser exibido.
   */
  @Input()
  public livro!: LivroDetalhes;
  /**
   * Emite a ação de fechar.
   */
  @Output()
  public fechar = new EventEmitter<boolean>();

}
