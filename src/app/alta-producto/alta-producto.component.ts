import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
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

  altaProducto(){
    this.servicio.alta(this.e1).subscribe(()=>
    {
     this.servicio.listar().subscribe(data =>
      {this.servicio.productoCambio.next(data)})});  
   this.router.navigate(['']);  
  }

}
