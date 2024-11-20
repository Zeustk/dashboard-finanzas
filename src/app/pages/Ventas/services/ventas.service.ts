import { Injectable } from '@angular/core';
import {Ventas} from "../interface/ventas.interface"
import { ServicoGeneral } from '../../../ServiciosR/get.service';

@Injectable()
export class VentasServicio extends ServicoGeneral<Ventas>{

  private _Ventas!:Ventas;

  get Ventas(): Ventas {
    return { ...this._Ventas };
  }


  ConsultarVentas(){
    return this.Consultar('getVentas');
  }

  GenerarReportesVentas(){
    return this.ConsultarReporte('getReportes');
  }

}
