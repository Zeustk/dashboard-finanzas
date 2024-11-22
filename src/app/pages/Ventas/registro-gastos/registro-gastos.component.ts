
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
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
  constructor(private router: Router, private gastoService: registroService) {}
  private routerSubscription: Subscription | null = null;
  ngOnInit(): void {
    this.CargarGastos();

    // Detectar cambios de navegación y recargar datos
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.CargarGastos();
    });
  }

  CargarGastos() {
    console.log("Cargando gastos...");
    this.gastoService.ConsultarGastos().subscribe(
      (ListGastos: registro[] | null) => {
        if (ListGastos != null) {
          this.gastos = ListGastos;
          console.log("Gastos cargados:", ListGastos);
        }
      },
      (error: any) => {
        console.error('Error al consultar gastos:', error);
      }
    );
  }
}
