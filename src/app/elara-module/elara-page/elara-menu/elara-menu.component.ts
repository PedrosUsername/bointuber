import { Component } from '@angular/core';

@Component({
  selector: 'app-elara-menu',
  templateUrl: './elara-menu.component.html',
  styleUrls: ['./elara-menu.component.scss']
})
export class ElaraMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
