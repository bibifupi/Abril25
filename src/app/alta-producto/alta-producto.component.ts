import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { ProductoService } from '../_servicios/producto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent implements OnInit {

  form: FormGroup;
  id: number = 0;
  edicion: boolean = false;
  constructor(private servicio: ProductoService,
    private route: ActivatedRoute,
    private router: Router) {
    this.form = new FormGroup({
      'idProducto': new FormControl(0),
      'nombreProducto': new FormControl(''),
      'precioUnitario': new FormControl(0),
      'unidadesStock': new FormControl(0),
      'categoria': new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(data => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.formaFormulario();

      });
  }

  formaFormulario() {
    if(this.edicion){
      this.servicio.listarPorId(this.id)
        .subscribe(data => {
          this.form = new FormGroup({
            'idProducto': new FormControl(data.idProducto),
            'nombreProducto': new FormControl(data.nombreProducto),
            'precioUnitario': new FormControl(data.precioUnitario),
            'unidadesStock':new FormControl(data.unidadesStock),
            'categoria':new FormControl(data.categoria)
          });
        })
    }
  }
  operar(){
    let p:Producto = {
      'idProducto': this.form.value['idProducto'],
      'nombreProducto' : this.form.value['nombreProducto'],
      'precioUnitario': this.form.value['precioUnitario'],
      'unidadesStock':this.form.value['unidadesStock'],
      'categoria':this.form.value['categoria']
    }
    if(this.edicion){
     
      this.servicio.actualizar(p)
        .subscribe(()=>{
          this.servicio.listar()
            .subscribe(data=>{
              this.servicio.productoCambio.next(data);
            });
        });
    }else{
      this.servicio.alta(p)
        .subscribe(()=>{
          this.servicio.listar()
            .subscribe(data => {
              this.servicio.productoCambio.next(data);
            });
        });
    }
    this.router.navigate([''])
  }
    
  


  // @Output() avisoPadre: EventEmitter<Observable<Producto[]>> =
  //   new EventEmitter();



  // altaProducto() {
  //   this.servicio.alta(this.e1).subscribe(() => {
  //     this.servicio.listar().subscribe(data => { this.servicio.productoCambio.next(data) })
  //   });
  //   this.router.navigate(['']);
  // }

}
