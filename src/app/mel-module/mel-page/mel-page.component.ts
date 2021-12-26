import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/shared/bridge.service';

@Component({
  selector: 'app-mel-page',
  templateUrl: './mel-page.component.html',
  styleUrls: ['./mel-page.component.scss']
})
export class MelPageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ){}

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }

}
