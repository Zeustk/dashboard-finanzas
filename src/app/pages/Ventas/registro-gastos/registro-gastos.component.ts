
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
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
  private routerSubscription: Subscription | null = null;

  constructor(
    private registroService: registroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CargarGastos();

    // Escuchar cambios de navegación dentro de la misma ruta
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.CargarGastos();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  CargarGastos(): void {
    console.log('Cargando datos...');
    this.registroService.ConsultarGastos().subscribe(
      (ListGastos: registro[] | null) => {
        if (ListGastos) {
          this.gastos = ListGastos;
          console.log('Datos cargados:', ListGastos);
        }
      },
      (error: any) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }
}
