import { Livro } from './livro';

describe('Livro', () => {
  it('should create an instance', () => {
    expect(new Livro(
      'fafafafa',
      'livro teste 1',
      'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    )).toBeTruthy();
  });
});
