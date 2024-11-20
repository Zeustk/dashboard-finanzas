import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.scss'
})
export default class TablasComponent {
  ventas = [
    { fecha: '2024-11-18', hora: '10:00 AM', monto: 200, razonDeVenta:'limonada grande'  },
    { fecha: '2024-11-18', hora: '11:30 AM', monto: 500, razonDeVenta:'limonada grande' },
    { fecha: '2024-11-18', hora: '01:45 PM', monto: 350, razonDeVenta:'limonada pequeña' },
    { fecha: '2024-11-18', hora: '03:20 PM', monto: 450, razonDeVenta:'limonada mediana' },
    { fecha: '2024-11-18', hora: '04:50 PM', monto: 700, razonDeVenta:'limonada pequeña' },
  ];
}
