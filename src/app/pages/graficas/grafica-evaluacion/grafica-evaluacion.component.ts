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

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: [13, 30, 40, 20, 50, 30, 40, 10, 64, 50, 10, 20]
        },

      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {

          }
        }
      },
      colors: [
        "#FF0000",
        "#4CAF50",

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
        categories: [
          ["Enero"],
          ["Febrero"],
          ["Marzo"],
          ["Abril"],
          ["Mayo"],
          ["Junio"],
          ["Julio"],
          ["Agosto"],
          ["Septiembre"],
          ["Octubre"],
          ["Noviembre"],
          ["Diciembre"],

        ],
        labels: {

          style: {
            colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
            fontSize: "12px",

          }
        },

      },
      yaxis: {
        title: {
          style:{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#FFFFFF"
          },
          text: "$ (Informacion)"
        }
      }
    };
  }
}
