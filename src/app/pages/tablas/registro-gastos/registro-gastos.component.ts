
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { registroService } from '../../Ventas/registro-gastos/services/registro.service';
import { registro } from '../../Ventas/registro-gastos/interface/registro.interface';

@Component({
  selector: 'app-registro-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro-gastos.component.html',
  styleUrl: './registro-gastos.component.scss'
})
export default class RegistroGastosComponent implements OnInit {
  constructor(private gastoService: registroService){
    
  }
  gastos:registro[]=[] ;

  ngOnInit(): void { // Método del ciclo de vida
    this.CargarGastos(); // Llamar al método al cargar el componente
  }

  CargarGastos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.gastoService.ConsultarGastos().subscribe(
      (ListGastos: registro[] | null) => {

        if (ListGastos != null) {
          this.gastos= ListGastos;
          console.log("hoal");

      
        }
       
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }
}
