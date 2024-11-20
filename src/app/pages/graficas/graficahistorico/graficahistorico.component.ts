import { Component, ViewChild } from "@angular/core";
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, NgApexchartsModule } from "ng-apexcharts";

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
export class GraficahistoricoComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // Lista de meses con ingresos, gastos y monto (que no se graficará)
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
    // Recorremos los datos para llenar las series (sin incluir el campo 'monto')
    const meses = this.datosHistoricos.map(data => data.mes);
    const ingresosData = this.datosHistoricos.map(data => data.ingresos);
    const gastosData = this.datosHistoricos.map(data => data.gastos);

    this.chartOptions = {
      series: [
        {
          name: "Ingresos",
          data: ingresosData,
        },
        {
          name: "Gastos",
          data: gastosData
        },
      ],
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
        enabled: false
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"]
      },
      xaxis: {
        categories: meses,
        labels: {
          style: {
            colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
            fontSize: "12px",
            fontFamily: "Arial, sans-serif"
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
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        },
      },
      legend: {
        labels: {
          colors: ['#FFFFFF', '#FFFFFF'],
        }
      }
    };
  }
}
