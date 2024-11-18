import { style } from "@angular/animations";
import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLocale,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";



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

  constructor() {
    this.chartOptions = {

      series: [

        {

          name: "Mes Anterior",
          data: [20, 40, 54, 44, 55, 57, 56, 61, 58, 63, 60, 66],

        },
        {
          name: "Mes Actual",
          data: [20, 50, 62, 76, 85, 101, 98, 87, 105, 91, 114, 94]
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
        colors: ["#4CAF50", "#FF0000",]
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
        categories: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],

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
          style:{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#FFFFFF"
          },
          text: "$ (Informacion)"
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
