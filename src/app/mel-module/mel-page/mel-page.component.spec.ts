import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelPageComponent } from './mel-page.component';




describe('MelPageComponent', () => {
  let component: MelPageComponent;
  let fixture: ComponentFixture<MelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
