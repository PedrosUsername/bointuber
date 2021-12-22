import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaPageComponent } from './sana-page.component';

describe('SanaPageComponent', () => {
  let component: SanaPageComponent;
  let fixture: ComponentFixture<SanaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
