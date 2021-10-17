import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { Livro } from 'src/app/models/livro';

import { LivroComponent } from './livro.component';

describe('LivroComponent', () => {
  let component: LivroComponent;
  let fixture: ComponentFixture<LivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LivroComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    component.livro = new Livro(
      'fafafafa',
      'livro mock',
      'livro mock capa',
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o livro correto', () => {
    const cardDe = fixture.debugElement.query(By.css('.card'));
    let livroSelecionado: Livro | undefined;
    component.livroSelecionado.pipe(first()).subscribe(livro => { livroSelecionado = livro })
    cardDe.triggerEventHandler('click', null);
    expect(livroSelecionado).toBe(component.livro);
  });
});
