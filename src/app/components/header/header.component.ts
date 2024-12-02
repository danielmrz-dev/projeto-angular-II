import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  events: string[] = [];
  opened: boolean = false;

  @Output() openSidenav = new EventEmitter<void>();

  abrir() {
    this.openSidenav.emit()
  }
}
