import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importación de CommonModule
import { GraficahistoricoComponent } from '../../graficas/graficahistorico/graficahistorico.component';
import { GraficaEvaluacionComponent } from '../../graficas/grafica-evaluacion/grafica-evaluacion.component';
import { historico } from './interface/historico.interface';
import { historicoService } from './service/historico.service';

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
export default class HistoricoComponent implements OnInit{
  // Ejemplo de datos para la tabla
  /*historico = [
    { mes: 'wo', gastos: 4, ingresos: 3, monto: 700 },
    { mes: 'Febrero', gastos: 600, ingresos: 1500, monto: 900 },
    { mes: 'Marzo', gastos: 750, ingresos: 1800, monto: 1050 },
    { mes: 'Abril', gastos: 800, ingresos: 2000, monto: 1200 },
  ];*/
  historico : historico[]=[];
  constructor(private historicoService:historicoService) {}
  ngOnInit(): void {
    this.CargarHistorico();
  }
  
 
  CargarHistorico() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
    console.log("hi Historico");
    this.historicoService.ConsultarHistorico().subscribe(
      (ListHistorico: historico[] | null) => {

        if (ListHistorico != null) {
          this.historico= ListHistorico;
          console.log(ListHistorico);

      
        }
       
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }
}
