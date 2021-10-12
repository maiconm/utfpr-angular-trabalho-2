import { LivroDetalhes } from './livro-detalhes';

describe('LivroDetalhes', () => {
  it('should create an instance', () => {
    expect(new LivroDetalhes(
      'fafafafa',
      'livro teste 1',
      'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      'Sinopse teste',
      'Autor teste',
      'Editora teste',
    )).toBeTruthy();
  });
});
