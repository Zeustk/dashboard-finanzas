import { Component } from '@angular/core';
import { GraficahistoricoComponent } from "../../graficas/graficahistorico/graficahistorico.component";
import { GraficaEvaluacionComponent } from "../../graficas/grafica-evaluacion/grafica-evaluacion.component";

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [GraficahistoricoComponent, GraficaEvaluacionComponent],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export default class HistoricoComponent {

}
