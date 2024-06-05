import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RecetasService } from 'src/Servicios/recetas.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit{

  categorias: any[] = [];

  constructor(private recetasService: RecetasService, private router: Router) { }

  ngOnInit() {
    this.obtenerCategorias();
  }

  //Aquí pipe es opcional pero lo uso para que me muestre errores si falla la petición
  obtenerCategorias() {
    this.recetasService.getCategorias().pipe(
      catchError(error => {
        console.error('Error al obtener categorías', error);
        return of([]);
      })
    ).subscribe(data => {
      this.categorias = data;
    });
  }
  /*
  //Uso de promesas
  async obtenerCategorias() {
    this.categorias = await this.recetasServicio.getCategorias();
  }
  */

  verDetalleCategoria(id: string){
    this.router.navigate(['categoria', id]);
  }
}
