import { Component, OnInit } from '@angular/core';
import { LivroDetalhes } from 'src/app/models/livro-detalhes';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.css']
})
export class LivroDetalhesComponent {

  public livroDetalhes = new LivroDetalhes(
    'teste',
    'teste',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZLjA_xrj12shksuLChiHCAjrptTIcVV1liAdVD2c-yRsuSfux3hvrejETPqw8yTb8FbfXzaYSnViS&usqp=CAc',
    'als;kfjdlaksdjf as;lkdfjalksdfj;alskdjf a;sldkfj;aslkdfjasdf ;lkjasdf;lkjasd;lfkj ;lkjsdaflk;j',
    'asdfasdf',
    'asdfasdf'
  );

}
