import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {

  e1:Producto={
    "idProducto": 0,
    "nombreProducto": "",
    "precioUnitario": 0,
    "unidadesStock":0,
    "categoria":0
  };

  @Output() avisoPadre:EventEmitter<Observable<Producto[]>>=
  new EventEmitter();

  constructor(private servicio: ProductoService,
    private route: ActivatedRoute,
    private router: Router){}

  eliminarProducto(id: number): void {
    this.servicio.eliminar(id).subscribe(() => {
      console.log(`Producto con ID ${id} eliminado correctamente.`);
      this.servicio.listar().subscribe(data =>
        {this.servicio.productoCambio.next(data)})});  
     this.router.navigate(['']); 

    };
  }


