import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AltaProductoComponent } from '../alta-producto/alta-producto.component';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [RouterModule, AltaProductoComponent],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private servicio: ProductoService) { }

  ngOnInit(): void {
    this.servicio.productoCambio
    .subscribe((data)=>{this.productos=data})

    this.servicio.listar()
       .subscribe(datos => {
          this.productos = datos;

       })
  }
  recibirAviso(listaActualizada: Observable<Producto[]>) {
    //listaActualizada.subscribe(data => this.productos = data);
    this.servicio.listar()
      .subscribe(datos => {
        this.productos = datos;
      })
  }
}
