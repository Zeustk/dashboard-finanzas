import { Injectable } from '@angular/core';
import { ServicoGeneral } from '../../../ServiciosR/get.service';
import { usuario } from '../login/interface/usuario';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class UsuarioServicio extends ServicoGeneral<usuario>{

  private _Ventas!:usuario;

  get Ventas(): usuario {
    return { ...this._Ventas };
  }


  ConsultarVentas(){
    return this.Consultar('getVentas');
  }

  GenerarReportesVentas(){
    return this.ConsultarReporte('getReportes');
  }
  BuscarUsuario(usuarios: usuario) {


    const body = {

      Email: usuarios.Email,
      Contrasena: usuarios.Contrasena,
      

    };

    return this.Agregar(body,'getUsuarioConId')
  }

}
