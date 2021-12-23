import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelComponent } from './mel.component';



describe('MelComponent', () => {
  let component: MelComponent;
  let fixture: ComponentFixture<MelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
