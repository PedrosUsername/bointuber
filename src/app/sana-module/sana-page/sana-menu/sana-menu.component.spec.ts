import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaMenuComponent } from './sana-menu.component';

describe('IchikaMenuComponent', () => {
  let component: SanaMenuComponent;
  let fixture: ComponentFixture<SanaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
