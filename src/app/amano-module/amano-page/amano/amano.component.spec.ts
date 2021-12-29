import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmanoComponent } from './amano.component';



describe('AmanoComponent', () => {
  let component: AmanoComponent;
  let fixture: ComponentFixture<AmanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
