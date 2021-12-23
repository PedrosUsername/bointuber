import { Component } from '@angular/core';

@Component({
  selector: 'app-mel-menu',
  templateUrl: './mel-menu.component.html',
  styleUrls: ['./mel-menu.component.scss']
})
export class MelMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
