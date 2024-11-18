import { Component } from '@angular/core';
import { GraficahistoricoComponent } from "../../graficas/graficahistorico/graficahistorico.component";

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [GraficahistoricoComponent],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export default class HistoricoComponent {

}
