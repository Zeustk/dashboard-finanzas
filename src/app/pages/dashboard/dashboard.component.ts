import { Component } from '@angular/core';
import PerfilComponent from "../perfil/perfil.component";
import TablasComponent from "../Ventas/tablas.component";
import RegistroGastosComponent from "../Ventas/registro-gastos/registro-gastos.component"


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RegistroGastosComponent,
    TablasComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}
