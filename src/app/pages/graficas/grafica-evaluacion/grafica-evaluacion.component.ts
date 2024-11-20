import { Component, ViewChild } from "@angular/core";
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
export class GraficaEvaluacionComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // Lista de datos históricos con monto
  public datosHistoricos = [
    { mes: "Enero", monto: 500 },
    { mes: "Febrero", monto: 700 },
    { mes: "Marzo", monto: 850 },
    { mes: "Abril", monto: 600 },
    { mes: "Mayo", monto: 650 },
    { mes: "Junio", monto: 700 },
    { mes: "Julio", monto: 750 },
    { mes: "Agosto", monto: 800 },
    { mes: "Septiembre", monto: 720 },
    { mes: "Octubre", monto: 780 },
    { mes: "Noviembre", monto: 850 },
    { mes: "Diciembre", monto: 900 }
  ];

  constructor() {
    // Extraemos solo los valores de monto para la gráfica
    const meses = this.datosHistoricos.map(data => data.mes);
    const montos = this.datosHistoricos.map(data => data.monto);

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
        categories: meses, // Usamos los meses de la lista
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
}
