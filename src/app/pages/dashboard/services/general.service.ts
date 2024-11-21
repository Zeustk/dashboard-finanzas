import { Injectable } from '@angular/core';
import { ServicoGeneral } from '../../../ServiciosR/get.service';
import { General } from '../general.interface.ts/general';


@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class GeneralServicio extends ServicoGeneral<General>{

  private _general!:General;

  get general(): General{
    return { ...this._general};
  }


  ConsultarGeneral(){
    return this.Consultar('getGeneral');
  }

  GenerarReportesVentas(){
    return this.ConsultarReporte('getReportes');
  }
  
}
