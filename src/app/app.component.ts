import { Component } from '@angular/core';
import { Livro } from './models/livro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public selecionarLivro(livro: Livro): void {
    console.log(livro);
  }

}
