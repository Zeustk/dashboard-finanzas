import { Component, Input } from '@angular/core';
import { UsuarioServicio } from '../services/usuarios.service';
import { usuario } from './interface/usuario';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private usuarioServ:UsuarioServicio){
    
  }
  @Input() Usuario: usuario = {
    Email: '',
    Contrasena: ''
  }
  async AgregarUsuario() {


    try{
 
     const respuestaRegistro = await this.usuarioServ.BuscarUsuario(this.Usuario).toPromise();
     Swal.fire({
       text: `Mensaje ${respuestaRegistro}`,
       confirmButtonText: 'Aceptar'
     });
    }catch(error){
 
     const errorMessage = (error as any).error;
     Swal.fire({
       text:  `Mensaje${errorMessage} `  ,
       confirmButtonText: 'Aceptar'
     });
     return;

    }
        
     
   
  
 
 
   }
}
