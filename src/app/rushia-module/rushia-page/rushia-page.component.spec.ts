import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushiaPageComponent } from './rushia-page.component';

describe('RushiaPageComponent', () => {
  let component: RushiaPageComponent;
  let fixture: ComponentFixture<RushiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushiaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
