import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivateFn, Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { ItemAddedDialogComponent } from '../components/item-added-dialog/item-added-dialog.component';

export const protectorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dialog = inject(MatDialog)
  const loginService = inject(LoginAuthService)
  
  if (!loginService.isLogged) {
    dialog.open(ItemAddedDialogComponent, { 
      data: "Você precisa estar logado para cadastrar um perfume!"
    })
    router.navigate(['/login'])
    return false
  } else {
    return true
  }
};
