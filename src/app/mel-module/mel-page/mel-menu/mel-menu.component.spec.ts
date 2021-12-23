import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelMenuComponent } from './mel-menu.component';




describe('MelMenuComponent', () => {
  let component: MelMenuComponent;
  let fixture: ComponentFixture<MelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
