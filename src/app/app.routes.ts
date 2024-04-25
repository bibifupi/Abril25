import { Routes } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

export const routes: Routes = [
    { path: '', component: ListaProductoComponent },
    { path: 'alta', component: AltaProductoComponent },
    { path: 'eliminar', component: EliminarProductoComponent },
    { path: 'actualizar', component: ActualizarProductoComponent },

];
