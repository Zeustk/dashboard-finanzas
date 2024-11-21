import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";
import { historico } from "../../Ventas/historico/interface/historico.interface";
import { historicoService } from "../../Ventas/historico/service/historico.service";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-grafica-evaluacion',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './grafica-evaluacion.component.html',
  styleUrl: './grafica-evaluacion.component.scss'
})
export class GraficaEvaluacionComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  historico: historico[] = [];

  constructor(private historicoService: historicoService) {}

  ngOnInit(): void {
    this.CargarHistorico();
  }

  CargarHistorico() {
    console.log("listagraf Historico1");
    this.historicoService.ConsultarHistorico().subscribe(
      (ListHistorico: historico[] | null) => {
        if (ListHistorico != null) {
          this.historico = ListHistorico;
          console.log(ListHistorico);

          // Crear mapeo de meses
          const mesNombres: { [key: string]: string } = {
            "01": "Enero",
            "02": "Febrero",
            "03": "Marzo",
            "04": "Abril",
            "05": "Mayo",
            "06": "Junio",
            "07": "Julio",
            "08": "Agosto",
            "09": "Septiembre",
            "10": "Octubre",
            "11": "Noviembre",
            "12": "Diciembre"
          };

          // Extraer los valores de mes y monto para la gráfica
          const mesesConNombres = this.historico.map(data => {
            const [mes, ano] = data.Mes.split('/');
            return `${mesNombres[mes]}/${ano}`;
          });
          const montos = this.historico.map(data => data.Monto_a_Favor);

          this.chartOptions = {
            series: [
              {
                name: "Monto",
                data: montos, // Usamos los valores de monto aquí
              }
            ],
            chart: {
              height: 350,
              type: "bar",
              events: {
                click: function (chart, w, e) {
                  // Puedes agregar la lógica del click aquí si lo necesitas
                }
              }
            },
            colors: [
              "#4CAF50", // Verde para el monto
            ],
            plotOptions: {
              bar: {
                columnWidth: "45%",
                distributed: true
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            grid: {
              show: false
            },
            xaxis: {
              categories: mesesConNombres, // Usamos los meses con nombres de la lista
              labels: {
                style: {
                  colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                  fontSize: "12px",
                }
              },
            },
            yaxis: {
              title: {
                style: {
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#FFFFFF"
                },
                text: "$ (Monto)"
              }
            }
          };
        }
      },
      (error: any) => {
        console.error("Error al consultar marcas:", error);
      }
    );
  }
}
