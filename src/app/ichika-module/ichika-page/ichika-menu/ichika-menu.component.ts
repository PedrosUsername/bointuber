import { Component } from '@angular/core';

@Component({
  selector: 'app-ichika-menu',
  templateUrl: './ichika-menu.component.html',
  styleUrls: ['./ichika-menu.component.scss']
})
export class IchikaMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
