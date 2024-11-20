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
    { mes: "Enero", ingresos: 20, gastos: 15, monto: 500 },
    { mes: "Febrero", ingresos: 40, gastos: 25, monto: 700 },
    { mes: "Marzo", ingresos: 54, gastos: 30, monto: 850 },
    { mes: "Abril", ingresos: 44, gastos: 35, monto: 600 },
    { mes: "Mayo", ingresos: 55, gastos: 45, monto: 650 },
    { mes: "Junio", ingresos: 57, gastos: 50, monto: 700 },
    { mes: "Julio", ingresos: 56, gastos: 52, monto: 750 },
    { mes: "Agosto", ingresos: 61, gastos: 60, monto: 800 },
    { mes: "Septiembre", ingresos: 58, gastos: 55, monto: 720 },
    { mes: "Octubre", ingresos: 63, gastos: 65, monto: 780 },
    { mes: "Noviembre", ingresos: 60, gastos: 70, monto: 850 },
    { mes: "Diciembre", ingresos: 66, gastos: 75, monto: 900 }
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
