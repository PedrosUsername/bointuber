import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/shared/bridge.service';

@Component({
  selector: 'app-rushia-page',
  templateUrl: './rushia-page.component.html',
  styleUrls: ['./rushia-page.component.scss']
})
export class RushiaPageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ){}

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }

}
