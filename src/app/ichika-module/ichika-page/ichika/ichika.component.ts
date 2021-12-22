import { Component } from '@angular/core';

@Component({
  selector: 'app-ichika',
  templateUrl: './ichika.component.html',
  styleUrls: ['./ichika.component.scss']
})
export class IchikaComponent {
  moveQ1 = false;
  moveQ2 = false;
  moveQ3 = false;
  moveQ4 = false;
  
  moveQ5 = false;
  moveQ6 = false;
  moveQ7 = false;
  moveQ8 = false;

  rubor = false;

  constructor() { }  


  handleMouseEnterQ1(): void {
    this.moveQ1 = true;
    this.rubor = true;
  }
  handleMouseLeaveQ1(): void {
    this.moveQ1 = false;
    this.rubor = false;
  }

  handleMouseEnterQ2(): void {
    this.moveQ2 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ2(): void {
    this.moveQ2 = false;
    this.rubor = false;
  }

  handleMouseEnterQ3(): void {
    this.moveQ3 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ3(): void {
    this.moveQ3 = false;
    this.rubor = false;
  }

  handleMouseEnterQ4(): void {
    this.moveQ4 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ4(): void {
    this.moveQ4 = false;
    this.rubor = false;
  }

  handleMouseEnterQ5(): void {
    this.moveQ5 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ5(): void {
    this.moveQ5 = false;
    this.rubor = false;
  }

  handleMouseEnterQ6(): void {
    this.moveQ6 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ6(): void {
    this.moveQ6 = false;
    this.rubor = false;    
  }

  handleMouseEnterQ7(): void {
    this.moveQ7 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ7(): void {
    this.moveQ7 = false;
    this.rubor = false;    
  }

  handleMouseEnterQ8(): void {
    this.moveQ8 = true;
    this.rubor = true;    
  }
  handleMouseLeaveQ8(): void {
    this.moveQ8 = false;
    this.rubor = false;
  }

}
