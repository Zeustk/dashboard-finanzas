import { Component, Input } from '@angular/core';
import PerfilComponent from "../perfil/perfil.component";
import TablasComponent from "../Ventas/tablas.component";
import RegistroGastosComponent from "../Ventas/registro-gastos/registro-gastos.component"
import { ServicoGeneral } from '../../ServiciosR/get.service';
import { GeneralServicio } from './services/general.service';
import { General } from './general.interface.ts/general';


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


  constructor(private generalService:GeneralServicio){}

  @Input() gerenal: General = {
    Saldo_Actual: 0,
    Ingresos_Mes_Actual:0,
    Gastos_Mes_Actual: 0,
    Saldo_inicial:0,
    Ventas_Hoy:0,
    Gastos_Hoy:0,
    Numero_Ventas_Hoy:0,
    Numero_Ventas_Totales:0

  }

 

  ngOnInit(): void {
    this.cargarGeneral();
  }
  
 
  cargarGeneral() {
    this.generalService.ConsultarGeneral().subscribe(
      (ListVentas: General[] | null) => {
        if (ListVentas && ListVentas.length > 0) {
          this.gerenal = ListVentas[0]; // Asignar solo el primer elemento
        }
      },
      (error: any) => {
        console.error('Error al consultar general:', error);
      }
    );
  }
  






}
