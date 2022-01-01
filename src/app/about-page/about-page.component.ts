import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../shared/bridge.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private bridge: BridgeService
  ){}

  ngOnInit(): void {
  }

  onClick(message: string){
    this.bridge.emitChange(message);
  }

}
