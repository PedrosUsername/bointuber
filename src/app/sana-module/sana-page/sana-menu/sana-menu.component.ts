import { Component } from '@angular/core';

@Component({
  selector: 'app-sana-menu',
  templateUrl: './sana-menu.component.html',
  styleUrls: ['./sana-menu.component.scss']
})
export class SanaMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
