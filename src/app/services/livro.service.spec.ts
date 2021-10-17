import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LivroService } from './livro.service';

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
