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

  public livroDetalhes!: LivroDetalhes | null;

  constructor(
    private livroService: LivroService,
  ) {
  }

  public selecionarLivro({ id }: Livro): void {
    this.livroService.getLivroDetalhes(id).subscribe(livroDetalhes => {
      this.livroDetalhes = { ...livroDetalhes };
    });
  }

  public fecharDetalhes(): void {
    this.livroDetalhes = null;
  }

}
