import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/Servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private usuarioServicio: UsuarioService, private router: Router){
    this.loginForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contra: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    const {usuario, contra} = this.loginForm.value;
    if (this.usuarioServicio.validarUsuario(usuario, contra)){
      this.router.navigate(['/categorias']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
