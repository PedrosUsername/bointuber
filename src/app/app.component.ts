import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BridgeService } from './shared/bridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private bridge: BridgeService,
    private router: Router
  ){
    bridge.changeEmitted$.subscribe(
      message => {
          console.log(message);
          this.router.navigate([ message ])
      });
    }

}
