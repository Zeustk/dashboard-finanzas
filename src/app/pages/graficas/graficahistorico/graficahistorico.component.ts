import { Component, OnInit, ViewChild } from "@angular/core";
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, NgApexchartsModule } from "ng-apexcharts";
import { historico } from "../../Ventas/historico/interface/historico.interface";
import { historicoService } from "../../Ventas/historico/service/historico.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-graficahistorico',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './graficahistorico.component.html',
  styleUrl: './graficahistorico.component.scss'
})
export class GraficahistoricoComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  historico: historico[] = [];

  constructor(private historicoService: historicoService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 6
        }
      },
      fill: {
        colors: ["#4CAF50", "#FF0000"]  // Ingresos en verde y Gastos en rojo
      },
      dataLabels: {
        enabled: false,  // Desactivar los dataLabels
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [], // Aquí los meses se asignarán dinámicamente
        labels: {
          style: {
            colors: [], // Esto se asignará dinámicamente
            fontSize: "12px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "normal" // Añadir esto para asegurarse que las etiquetas sean visibles
          },
          rotate: -45, // Rotar las etiquetas para mejor visibilidad
          maxHeight: 100, // Limitar la altura para no cortar las etiquetas
        }
      },
      yaxis: {
        title: {
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#FFFFFF"
          },
          text: "Ingresos y Gastos"
        },
        labels: {
          style: {
            colors: "#FFFFFF", // Cambiar los valores del eje Y a blanco
            fontSize: "12px"    // Tamaño de fuente para los valores del eje Y
          }
        }
      },
      tooltip: {
        enabled: true, // Asegurarse de que el tooltip esté activado
        y: {
          formatter: function (val) {
            return "$ " + val + " Pesos";
          }
        },
      },
      legend: {
        labels: {
          colors: ['#FFFFFF'],
        }
      }
    };
  }

  ngOnInit(): void {
    this.CargarHistorico();
  }

  CargarHistorico() {
    console.log("graf Historico1");
    this.historicoService.ConsultarHistorico().subscribe(
      (ListHistorico: historico[] | null) => {
        if (ListHistorico != null) {
          this.historico = ListHistorico;
          console.log(ListHistorico);
          this.actualizarGrafica();
        }
      },
      (error: any) => {
        console.error("Error al consultar marcas:", error);
      }
    );
  }

  actualizarGrafica() {
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
  
    const mesesConAnios = this.historico.map(data => {
      const [mes, anio] = data.Mes.split('/');
      const mesNombre = mesNombres[mes];
      return `${mesNombre} ${anio}`; // Incluye tanto el mes como el año
    });
    
    const ingresosData = this.historico.map(data => data.Ingresos_Del_Mes);
    const gastosData = this.historico.map(data => data.Gastos_Del_Mes);
  
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: "Ingresos Del Mes",
          data: ingresosData,
        },
        {
          name: "Gastos Del Mes",
          data: gastosData,
        }
      ],
      xaxis: {
        categories: mesesConAnios,  // Usa las categorías con el año
        labels: {
          style: {
            colors: Array(mesesConAnios.length).fill("#FFFFFF"), // Asegúrate de que las etiquetas sean blancas
            fontSize: "12px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "normal"
          },
          rotate: -45,
          maxHeight: 100,
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return "$ " + val + " Pesos"; // Muestra los valores con formato
          }
        },
        x: {
          formatter: function (val) {
            return `Mes/Año: ${val}`; // Muestra el mes y año cuando pasas el mouse
          }
        }
      }
    };
  }
}
