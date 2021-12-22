import { Component } from '@angular/core';

@Component({
  selector: 'app-hajime-menu',
  templateUrl: './hajime-menu.component.html',
  styleUrls: ['./hajime-menu.component.scss']
})
export class HajimeMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
