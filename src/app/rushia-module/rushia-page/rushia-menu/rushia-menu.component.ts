import { Component } from '@angular/core';

@Component({
  selector: 'app-rushia-menu',
  templateUrl: './rushia-menu.component.html',
  styleUrls: ['./rushia-menu.component.scss']
})
export class RushiaMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
