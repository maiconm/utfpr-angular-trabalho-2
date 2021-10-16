import { Component } from '@angular/core';
import { Livro } from './models/livro';
import { LivroDetalhes } from './models/livro-detalhes';
import { LivroService } from './services/livro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Detalhes do livro.
   */
  public livroDetalhes!: LivroDetalhes | null;

  constructor(
    /**
     * Faz conexão com as APIs e converte as interfaces para models.
     */
    private livroService: LivroService,
  ) {
  }
  /**
   * Seleciona o livro para pegar os detalhes.
   * @param Livro Identificador do livro.
   */
  public selecionarLivro({ id }: Livro): void {
    this.livroService.getLivroDetalhes(id).subscribe(livroDetalhes => {
      this.livroDetalhes = { ...livroDetalhes };
    });
  }
  /**
   * Remove o objeto de detalhes do livro.
   */
  public fecharDetalhes(): void {
    this.livroDetalhes = null;
  }

}
