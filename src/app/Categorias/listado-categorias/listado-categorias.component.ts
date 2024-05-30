import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/Servicios/recetas.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit{

  categorias: any[] = [];

  constructor(private recetasServicio: RecetasService){}

  ngOnInit(){
    this.obtenerCategorias();
  }



  async obtenerCategorias() {
    this.categorias = await this.recetasServicio.getCategorias();
  }
}
