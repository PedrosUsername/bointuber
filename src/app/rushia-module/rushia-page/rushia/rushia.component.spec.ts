import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushiaComponent } from './rushia.component';

describe('RushiaComponent', () => {
  let component: RushiaComponent;
  let fixture: ComponentFixture<RushiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
