import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { registroService } from './services/registro.service';
import { registro } from './interface/registro.interface';

@Component({
  selector: 'app-registro-gastos',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule aquí
  templateUrl: './registro-gastos.component.html',
  styleUrls: ['./registro-gastos.component.scss']
})
export default class RegistroGastosComponent  implements OnInit{
  
  /*gastos = [
    { fecha: 'hh', hora: '10:00 AM', monto: 200, categoria: 'Compra de limones', proveedor: 'Frutas del Sol' },
    { fecha: '2024-11-18', hora: '11:30 AM', monto: 500, categoria: 'Azúcar', proveedor: 'Dulces del Campo' },
    { fecha: '2024-11-18', hora: '01:45 PM', monto: 350, categoria: 'Endulzantes', proveedor: 'SweetWorld' },
    { fecha: '2024-11-18', hora: '03:20 PM', monto: 450, categoria: 'Azúcar', proveedor: 'Azucarera Mundial' },
    { fecha: '2024-11-18', hora: '04:50 PM', monto: 700, categoria: 'Frutas variadas', proveedor: 'Mercado Central' },
  ];*/
  gastos : registro[]=[];
  constructor(private gastoService: registroService){}
  ngOnInit(): void {

    
        this.CargarGastos();
  

  }
  
 
  CargarGastos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
    console.log("hoal gastos");
    this.gastoService.ConsultarGastos().subscribe(
      (ListGastos: registro[] | null) => {

        if (ListGastos != null) {
          this.gastos= ListGastos;
          console.log(ListGastos);

      
        }
       
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }
}
