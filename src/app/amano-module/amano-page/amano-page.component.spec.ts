import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanoPageComponent } from './amano-page.component';

describe('AmanoPageComponent', () => {
  let component: AmanoPageComponent;
  let fixture: ComponentFixture<AmanoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
