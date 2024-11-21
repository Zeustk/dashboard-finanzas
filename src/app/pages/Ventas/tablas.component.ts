import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasServicio } from './services/ventas.service';
import { Ventas } from './interface/ventas.interface';
@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.scss'
})
export default class TablasComponent implements OnInit{
  
  ventas : Ventas[]=[];
  constructor(private  ventasService :VentasServicio ){}
  ngOnInit(): void {
    this.CargarVentas();
  }
  
 
  CargarVentas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
    console.log("hola ventas");
    this.ventasService.ConsultarVentas().subscribe(
      (ListVentas: Ventas[] | null) => {

        if (ListVentas != null) {
          this.ventas = ListVentas;
          console.log(ListVentas);

      
        }
       
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }
}
