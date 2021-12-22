import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HajimeComponent } from './hajime.component';

describe('HajimeComponent', () => {
  let component: HajimeComponent;
  let fixture: ComponentFixture<HajimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HajimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HajimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
