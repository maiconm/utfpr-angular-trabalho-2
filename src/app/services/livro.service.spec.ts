import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Categoria } from '../models/categoria';
import { Livro } from '../models/livro';
import { LivroDetalhes } from '../models/livro-detalhes';

import { LivroService } from './livro.service';

const categoriasFake = [
  new Categoria(
    'fafafafa',
    'categoria teste 1',
    [
      new Livro(
        'rererere',
        'livro teste',
        'teste capa',
      ),
      new Livro(
        'abcdef',
        'livro teste 2',
        'teste capa 2',
      ),
    ],
  ),
  new Categoria(
    'swswswsw',
    'categoria teste 2',
    [
      new Livro(
        'rererere',
        'livro teste',
        'teste capa',
      ),
      new Livro(
        'abcdef',
        'livro teste 2',
        'teste capa 2',
      ),
    ],
  ),
];
const livroDetalhesFake = new LivroDetalhes(
  'fafafafa',
  'titulo fake',
  'capa fake',
  'sinopse fake',
  'autor fake',
  'editora fake',
);

describe('LivroService', () => {
  let service: LivroService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'BASE_URL',
          useValue: 'http://mock.com/api',
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj(
            'HttpClient',
            [
              'get',
            ],
          ),
        },
      ],
    });
    service = TestBed.inject(LivroService);
    httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar models de categorias a partir da resposta HTTP', (doneFn: DoneFn) => {
    httpClient.get.and.returnValue(of(categoriasFake).pipe(delay(10)));
    service.getCategorias().subscribe((categorias: Categoria[]) => {
      expect(categorias).toHaveSize(2);
      expect(categorias[0]).toBeInstanceOf(Categoria);
      expect(categorias[0].livros).toHaveSize(2);
      doneFn();
    });
  });

  it('deve retornar model de LivroDetalhes a partir da resposta HTTP', (doneFn: DoneFn) => {
    httpClient.get.and.returnValue(of(livroDetalhesFake).pipe(delay(10)));
    service.getLivroDetalhes(livroDetalhesFake.id).subscribe((livro: LivroDetalhes) => {
      expect(livro).toBeInstanceOf(LivroDetalhes);
      doneFn();
    });
  });

});
