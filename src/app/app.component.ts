import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="ichika";
  hover_event = false;

  handleMouseEnter(): void {
    this.hover_event = true;
  }
  handleMouseLeave(): void {
    this.hover_event = false;
  }
}
