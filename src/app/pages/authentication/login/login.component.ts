import { Component, Input } from '@angular/core';
import { UsuarioServicio } from '../services/usuarios.service';
import { usuario } from './interface/usuario';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private usuarioServ: UsuarioServicio, private router: Router) {

  }
  @Input() Usuario: usuario = {
    Email: '',
    Contrasena: ''
  }
  async BuscandoUsuario() {


    try {

      const respuestaRegistro = await this.usuarioServ.BuscarUsuario(this.Usuario).toPromise();

      if (respuestaRegistro!=null) {
        console.log('hola');
        // Si la respuesta es válida y el usuario existe, redirigir a /dashboard
        console.log(respuestaRegistro);
        this.router.navigate(['/dashboard']);
      } else {
        // Aquí puedes manejar el caso en que no se encuentra el usuario
        Swal.fire({
          text: 'Usuario no encontrado',
          confirmButtonText: 'Aceptar',
        });
      }


    } catch (error) {

      const errorMessage = (error as any).error;
      Swal.fire({
        text: `Mensaje${errorMessage} `,
        confirmButtonText: 'Aceptar'
      });
      return;

    }






  }
}
