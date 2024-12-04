import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  @Input({ required: true }) badgeNumber: number = 0
  @Input({ required: true }) badgeHidden: boolean = false
  @Output() openSidenav = new EventEmitter<void>();

  events: string[] = [];
  opened: boolean = false;

  abrir() {
    this.openSidenav.emit()
  }
}
