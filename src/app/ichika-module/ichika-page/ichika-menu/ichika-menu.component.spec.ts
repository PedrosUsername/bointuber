import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchikaMenuComponent } from './ichika-menu.component';

describe('IchikaMenuComponent', () => {
  let component: IchikaMenuComponent;
  let fixture: ComponentFixture<IchikaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IchikaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IchikaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
