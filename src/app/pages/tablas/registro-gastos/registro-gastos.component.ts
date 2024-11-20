
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-registro-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro-gastos.component.html',
  styleUrl: './registro-gastos.component.scss'
})
export default class RegistroGastosComponent {
  gastos = [
    { fecha: '2024-11-18', hora: '10:00 AM', monto: 200, categoria: 'Compra de limones', proveedor: 'Frutas del Sol' },
    { fecha: '2024-11-18', hora: '11:30 AM', monto: 500, categoria: 'Azúcar', proveedor: 'Dulces del Campo' },
    { fecha: '2024-11-18', hora: '01:45 PM', monto: 350, categoria: 'Endulzantes', proveedor: 'SweetWorld' },
    { fecha: '2024-11-18', hora: '03:20 PM', monto: 450, categoria: 'Azúcar', proveedor: 'Azucarera Mundial' },
    { fecha: '2024-11-18', hora: '04:50 PM', monto: 700, categoria: 'Frutas variadas', proveedor: 'Mercado Central' },
  ];
}
