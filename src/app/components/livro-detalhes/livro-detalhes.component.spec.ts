import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { LivroDetalhes } from 'src/app/models/livro-detalhes';

import { LivroDetalhesComponent } from './livro-detalhes.component';

describe('LivroDetalhesComponent', () => {
  let component: LivroDetalhesComponent;
  let fixture: ComponentFixture<LivroDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LivroDetalhesComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDetalhesComponent);
    component = fixture.componentInstance;
    component.livro = new LivroDetalhes(
      'fafafafa',
      'Livro teste',
      'teste',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus provident autem esse asperiores laborum nisi unde. Ab, non unde? Dolor facilis consequatur dolorem corrupti! Exercitationem aut minus quas at?',
      'autor teste',
      'editora teste',
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir a ação de fechar ao clicar no botão', () => {
    const botaoDe = fixture.debugElement.query(By.css('button'));
    let fechado = false;
    component.fechar.pipe(first()).subscribe(fechar => { fechado = fechar })
    botaoDe.triggerEventHandler('click', null);
    expect(fechado).not.toBeTrue();
  });
});
