import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HajimeMenuComponent } from './hajime-menu.component';



describe('HajimeMenuComponent', () => {
  let component: HajimeMenuComponent;
  let fixture: ComponentFixture<HajimeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HajimeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HajimeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
