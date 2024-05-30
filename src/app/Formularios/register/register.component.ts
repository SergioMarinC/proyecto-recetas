import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/Servicios/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup;

  constructor(private usuarioServicio: UsuarioService, private router: Router){
    this.registerForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contra: new FormControl('', Validators.required),
      terminos: new FormControl(false, Validators.requiredTrue)
    })
  }

  onSubmit(){
    const {usuario, contra} = this.registerForm.value;
    if (this.usuarioServicio.validarUsuario(usuario, contra)){
      alert('Este usuario ya existe!!!');
      
    } else {
      this.usuarioServicio.agregarUsuario(usuario, contra);
      alert('Usuario creado correctamente');
      this.router.navigate(['/login']);
    }
  }
}
