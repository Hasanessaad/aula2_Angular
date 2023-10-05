import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LivroComponent } from './livro/livro.component';

const routes: Routes = [

  { path: "pessoas", component: CarroComponent},
  { path: "carros", component: PessoaComponent},
  { path: 'livros', component: LivroComponent },
  { path: "", redirectTo: "main", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
