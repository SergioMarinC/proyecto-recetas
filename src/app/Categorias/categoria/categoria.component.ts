import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RecetasService } from 'src/Servicios/recetas.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{
  recetas: any[] = [];
  idCategoria: string = '';

  constructor(private recetasService: RecetasService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.idCategoria = this.route.snapshot.paramMap.get('id') ?? '';
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.recetasService.getCategoria(this.idCategoria).pipe(
      catchError(error => {
        console.error('Error al obtener las recetas', error);
        return of([]);
      })
    ).subscribe(data => {
      this.recetas = data;
    });
  }

  verDetalleReceta(id: string){
    this.router.navigate(['receta', id]);
  }
}
