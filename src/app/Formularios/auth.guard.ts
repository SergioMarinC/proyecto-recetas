import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from 'src/Servicios/usuario.service';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  if (usuarioService.getAutenticado()) {
    return true;
  } else {
    return false;
  }
};
