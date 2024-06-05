import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RecetasService } from 'src/Servicios/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit{

  receta: any[] = [];
  idReceta: string = '';

  constructor(private recetasService: RecetasService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.idReceta = this.route.snapshot.paramMap.get('id') ??  '';
    this.obtenerReceta();
  }

  obtenerReceta(){
    this.recetasService.getReceta(this.idReceta).pipe(
      catchError(error => {
        console.error('Error al obtener la receta', error);
        return of([]);
      })
    ).subscribe(data => {
      this.receta = data;
    });
  }
}
