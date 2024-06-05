import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Formularios/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Formularios/register/register.component';
import { ListadoCategoriasComponent } from './Categorias/listado-categorias/listado-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaComponent } from './Categorias/categoria/categoria.component';
import { RecetaComponent } from './Categorias//receta/receta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListadoCategoriasComponent,
    CategoriaComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
