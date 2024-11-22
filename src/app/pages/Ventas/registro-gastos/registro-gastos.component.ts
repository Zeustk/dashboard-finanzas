
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Component, OnInit } from '@angular/core';
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

  gastos: registro[] = [];

  constructor(private registroService: registroService) {}

  ngOnInit(): void {
    // Cargar datos inicialmente
    this.CargarGastos();

  }



  CargarGastos(): void {
    console.log('Solicitando datos al backend...');
    this.registroService.ConsultarGastos().subscribe(
      (ListGastos: registro[] | null) => {
        if (ListGastos) {
          this.gastos = ListGastos;
          console.log('Datos cargados:', this.gastos);
        }
      },
      (error: any) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }
}
