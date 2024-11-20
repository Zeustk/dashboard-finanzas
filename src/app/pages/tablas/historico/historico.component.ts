import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importación de CommonModule
import { GraficahistoricoComponent } from '../../graficas/graficahistorico/graficahistorico.component';
import { GraficaEvaluacionComponent } from '../../graficas/grafica-evaluacion/grafica-evaluacion.component';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [
    CommonModule, // Importar CommonModule para habilitar directivas básicas
    GraficahistoricoComponent,
    GraficaEvaluacionComponent,
  ],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export default class HistoricoComponent {
  // Ejemplo de datos para la tabla
  historico = [
    { mes: 'Enero', gastos: 500, ingresos: 1200, monto: 700 },
    { mes: 'Febrero', gastos: 600, ingresos: 1500, monto: 900 },
    { mes: 'Marzo', gastos: 750, ingresos: 1800, monto: 1050 },
    { mes: 'Abril', gastos: 800, ingresos: 2000, monto: 1200 },
  ];
}
