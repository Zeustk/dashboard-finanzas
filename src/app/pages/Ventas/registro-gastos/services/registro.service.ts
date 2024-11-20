import { Injectable } from '@angular/core';
import {registro} from "../interface//registro.interface"
import { ServicoGeneral } from '../../../../ServiciosR/get.service';

@Injectable()
export class registroService extends ServicoGeneral<registro>{

  private _registro!:registro;

  get registro(): registro {
    return { ...this._registro };
  }


  ConsultarGastos(){
    return this.Consultar('getGastos');
  }

  GenerarReportesGastos(){
    return this.ConsultarReporte('getGastos');
  }

}
