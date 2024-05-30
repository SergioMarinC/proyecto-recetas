import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: {usuario: string, contra: string}[] = [];
  private estaAutenticado = false;


  constructor() {
    this.usuarios = [
      {usuario: 'admin', contra: '1234'},
      {usuario: 'pepe', contra: 'pepe'},
    ];
   }

   //Comprueba si existe, si lo hace devuelve false(no se agrega)
   //Si existe devuelve true
   agregarUsuario(usuario: string, contra: string): boolean{
    if(this.validarUsuario(usuario, contra)){
      return false;
    }else{
      this.usuarios.push({usuario, contra});
      return true;
    }
    
   }

   //Comprueba si existe el usuario, comprueba los usuarios con el callback
   validarUsuario(usuario: string, contra: string): boolean{
    return this.usuarios.some(u => u.usuario === usuario && u.contra === contra);
   }

   toogleAutenticado(){
    this.estaAutenticado = !this.estaAutenticado;
   }

   getAutenticado(): boolean{
    return this.estaAutenticado;
   }
}
