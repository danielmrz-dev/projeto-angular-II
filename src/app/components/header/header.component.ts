import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  isLogged = inject(LoginAuthService)

  @Input({ required: true }) badgeNumber: number = 0
  @Input({ required: true }) badgeHidden: boolean = false
  @Output() openSidenav = new EventEmitter<void>();

  events: string[] = [];
  opened: boolean = false;

  abrir() {
    this.openSidenav.emit()
  }

  
}
