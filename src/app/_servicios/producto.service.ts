import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = 'http://localhost:8080/productos';
  productoCambio = new Subject<Producto[]>();

  listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
  alta(p: Producto) {
    return this.http.post(this.url, p);
  }
  eliminar(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
  actualizar(p: Producto) {
    return this.http.put(this.url, p);
  }

  constructor(private http: HttpClient) { }
}
