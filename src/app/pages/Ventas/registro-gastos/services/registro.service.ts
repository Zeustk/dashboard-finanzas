import { Injectable } from '@angular/core';
import {registro} from "../interface//registro.interface"
import { ServicoGeneral } from '../../../../ServiciosR/get.service';

@Injectable()
export class registroService extends ServicoGeneral<registro>{

  private _registro!:registro;

  get registro(): registro {
    return { ...this._registro };
  }


  ConsultarVentas(){
    return this.Consultar('getregistro');
  }

  GenerarReportesVentas(){
    return this.ConsultarReporte('getReportes');
  }

}
