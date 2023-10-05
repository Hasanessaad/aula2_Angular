import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComponent } from './carro/carro.component';
import { LivroComponent } from './livro/livro.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { IndexComponent } from './Layout/index/index.component';
import { HeaderComponent } from './Layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    LivroComponent,
    PessoaComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
