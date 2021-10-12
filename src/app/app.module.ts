import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaListaComponent } from './components/categoria-lista/categoria-lista.component';
import { LivroComponent } from './components/livro/livro.component';
import { LivroDetalhesComponent } from './components/livro-detalhes/livro-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaListaComponent,
    LivroComponent,
    LivroDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:3001/api',
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
