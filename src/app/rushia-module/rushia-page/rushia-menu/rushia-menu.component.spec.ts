import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushiaMenuComponent } from './rushia-menu.component';

describe('RushiaMenuComponent', () => {
  let component: RushiaMenuComponent;
  let fixture: ComponentFixture<RushiaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushiaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushiaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
