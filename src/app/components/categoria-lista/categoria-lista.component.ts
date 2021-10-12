import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent {

  categorias = [
    new Categoria(
      'fafafafa',
      'Terror',
      [
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        )
      ],
    ),
    new Categoria(
      'fafafafa',
      'Terror',
      [
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        )
      ],
    ),
    new Categoria(
      'fafafafa',
      'Terror',
      [
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        )
      ],
    ),
    new Categoria(
      'fafafafa',
      'Terror',
      [
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
        new Livro(
          'fafafafa',
          'Unholy',
          'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theunholy_keyart_1400x2100_he.png?itok=Jx3Hwj4h',
        ),
      ],
    )
  ]

}
