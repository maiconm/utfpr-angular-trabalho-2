import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { of } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

import { CategoriaListaComponent } from './categoria-lista.component';

@Component({
  selector: 'app-livro',
  template: '',
})
class LivroStubComponent {
  @Input()
  public livro!: Livro;

  @Output()
  public livroSelecionado = new EventEmitter<Livro>();
}

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
const categoriaSemLivro = [
  new Categoria(
    'fafafafa',
    'teste categoria',
    [],
  ),
];

describe('CategoriaListaComponent', () => {
  let component: CategoriaListaComponent;
  let fixture: ComponentFixture<CategoriaListaComponent>;
  const livroService = jasmine.createSpyObj(
    'LivroService',
    ['getCategorias',],
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoriaListaComponent,
        LivroStubComponent,
      ],
      providers: [
        {
          provide: LivroService,
          useValue: livroService,
        },
      ],
    })
    .compileComponents();
  });

  describe('Categorias com livro', () => {

    beforeEach(() => {
      livroService.getCategorias.and.returnValue(of(categoriasFake));
      fixture = TestBed.createComponent(CategoriaListaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('`categorias$` deve ser definido', () => {
      expect(component.categorias$).toBeDefined();
    });

    it('deve renderizar nome da categoria com Titlecase', () => {
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBe('Categoria Teste 1');
    });

  });


  describe('Categoria sem livro', () => {

    beforeEach(() => {
      livroService.getCategorias.and.returnValue(of(categoriaSemLivro));
      fixture = TestBed.createComponent(CategoriaListaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('dev apresentar texto de "sem livros" quando não houver livros para a categoria', () => {
      fixture.detectChanges();
      const h3 = fixture.nativeElement.querySelector('h3');
      expect(h3.textContent).toBe('Sem livros para essa categoria');
    });

  });

});
