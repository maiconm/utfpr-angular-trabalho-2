import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Categoria } from '../models/categoria';
import { Livro } from '../models/livro';

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
});
