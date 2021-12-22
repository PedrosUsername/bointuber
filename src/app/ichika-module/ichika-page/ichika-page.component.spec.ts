import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchikaPageComponent } from './ichika-page.component';

describe('IchikaPageComponent', () => {
  let component: IchikaPageComponent;
  let fixture: ComponentFixture<IchikaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IchikaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IchikaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
