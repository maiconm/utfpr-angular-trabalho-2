import { Categoria } from './categoria';

describe('Categoria', () => {
  it('should create an instance', () => {
    expect(new Categoria(
      'fafafafa',
      'Categoria teste',
      [],
    )).toBeTruthy();
  });
});
