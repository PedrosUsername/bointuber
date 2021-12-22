import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HajimePageComponent } from './hajime-page.component';



describe('HajimePageComponent', () => {
  let component: HajimePageComponent;
  let fixture: ComponentFixture<HajimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HajimePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HajimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
