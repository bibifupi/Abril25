import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {
  e1: Producto = {
    "idProducto": 0,
    "nombreProducto": "",
    "precioUnitario": 0,
    "unidadesStock": 0,
    "categoria": 0
  };
  @Output() avisoPadre: EventEmitter<Observable<Producto[]>> =
    new EventEmitter();

  constructor(private servicio: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

    actualizarProducto(){
      this.servicio.actualizar(this.e1).subscribe(()=>
    {
     this.servicio.listar().subscribe(data =>
      {this.servicio.productoCambio.next(data)})});  
   this.router.navigate(['']);  
    }

}
