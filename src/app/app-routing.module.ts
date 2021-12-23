import { ListaSenadoresComponent } from './components/lista-senadores/lista-senadores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasSenadorComponent } from './components/despesas-senador/despesas-senador.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista-senadores', pathMatch: 'full'},
  {path: 'lista-senadores', component: ListaSenadoresComponent},
  {path: 'despesas-senador/:id', component: DespesasSenadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
