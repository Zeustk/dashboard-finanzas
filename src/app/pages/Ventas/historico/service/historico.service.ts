import { Injectable } from '@angular/core';
import {historico} from "../interface/historico.interface"
import { ServicoGeneral } from '../../../../ServiciosR/get.service';

@Injectable()
export class historicoService extends ServicoGeneral<historico>{

  private _historico!:historico;

  get historico(): historico {
    return { ...this._historico };
  }


  ConsultarVentas(){
    return this.Consultar('gethistorico');
  }

  GenerarReportesVentas(){
    return this.ConsultarReporte('getReportes');
  }

}
