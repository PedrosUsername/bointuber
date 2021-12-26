import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'src/app/shared/bridge.service';

@Component({
  selector: 'app-sana-page',
  templateUrl: './sana-page.component.html',
  styleUrls: ['./sana-page.component.scss']
})
export class SanaPageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ){}

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }

}
