import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/shared/bridge.service';

@Component({
  selector: 'app-ichika-page',
  templateUrl: './ichika-page.component.html',
  styleUrls: ['./ichika-page.component.scss']
})
export class IchikaPageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ){}

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }
  

}
