import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }

  async getCategorias(): Promise<any> {
    const response = await lastValueFrom(this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php'));
    return response.categories;
  }
}
