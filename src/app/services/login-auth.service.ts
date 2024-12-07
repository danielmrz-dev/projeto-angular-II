import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  isLogged = false

  login(): void {
    this.isLogged = true
  }

  logout(): void {
    this.isLogged = false
  }
}
