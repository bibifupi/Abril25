import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril25';
}
