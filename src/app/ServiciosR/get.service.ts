import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environments';


@Injectable()
export class ServicoGeneral<T> {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }


  Consultar(endpoint: string) {

    const url = `${this.baseUrl}/${endpoint}`

    return this.http.get<T[]>(url);

  }

  /* BuscarUsuario(body: T, endpoint: string) {
   const url = `${this.baseUrl}/${endpoint}`;


   return this.http.post<any>(url,body);
 } */


  ConsultarReporte(endpoint: string) {

    const url = `${this.baseUrl}/${endpoint}`

    return this.http.get<any[]>(url);

  }

  Agregar(body:T,endpoint:string){

    const url = `${this.baseUrl}/${endpoint}`  //HTTP://localhost/api/endpoint

    return this.http.post<string>(url, body)

  }

}
