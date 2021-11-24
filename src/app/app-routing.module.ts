import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearVideojuegoComponent } from './components/crear-videojuego/crear-videojuego.component';

//componentes
import { ListarVideojuegosComponent } from './components/listar-videojuegos/listar-videojuegos.component';

const routes: Routes = [
  {path: '', component: ListarVideojuegosComponent},
  {path: 'crear-videojuego',component: CrearVideojuegoComponent},
  {path: 'editar-videojuego/:id', component:CrearVideojuegoComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
