import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Formularios/login/login.component';
import { RegisterComponent } from './Formularios/register/register.component';
import { ListadoCategoriasComponent } from './Categorias/listado-categorias/listado-categorias.component';
import { authGuard } from './Formularios/auth.guard';
import { CategoriaComponent } from './Categorias/categoria/categoria.component';
import { RecetaComponent } from './Categorias/receta/receta.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'categorias', component: ListadoCategoriasComponent, canActivate:[authGuard]},
  {path: 'categoria/:id', component: CategoriaComponent},
  {path: 'receta/:id', component: RecetaComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
