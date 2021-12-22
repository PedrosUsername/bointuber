import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchikaComponent } from './ichika.component';

describe('IchikaComponent', () => {
  let component: IchikaComponent;
  let fixture: ComponentFixture<IchikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IchikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IchikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
