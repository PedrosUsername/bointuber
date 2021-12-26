import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/shared/bridge.service';

@Component({
  selector: 'app-hajime-page',
  templateUrl: './hajime-page.component.html',
  styleUrls: ['./hajime-page.component.scss']
})
export class HajimePageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ) { }

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }

}
