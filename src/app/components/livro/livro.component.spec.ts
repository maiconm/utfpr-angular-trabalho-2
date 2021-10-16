import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
