import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }

  /*
  //Transformado a promesas
  async getCategorias(): Promise<any> {
    const response = await lastValueFrom(this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php'));
    return response.categories;
  }
  */

  //Pipe permite encadenar operadores para transformar, manejar errores...
  //Map pilla del JSON del get categories y lo devuelve como emisión del observable
  getCategorias(): Observable<any[]> {
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php').pipe(
      map(response => response.categories)
    );
  }

  getCategoria(categoria: string): Observable<any[]> {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    return this.http.get<any>(url).pipe(
      map(response => response.meals)
    );
  }

  getReceta(receta: string): Observable<any[]> {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${receta}`;
    return this.http.get<any>(url).pipe(
      map(response => response.meals)
    );
  }
}
