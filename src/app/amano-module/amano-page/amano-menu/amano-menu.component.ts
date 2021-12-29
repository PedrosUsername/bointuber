import { Component } from '@angular/core';

@Component({
  selector: 'app-amano-menu',
  templateUrl: './amano-menu.component.html',
  styleUrls: ['./amano-menu.component.scss']
})
export class AmanoMenuComponent {

  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }

}
