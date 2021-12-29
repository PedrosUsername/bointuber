import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmanoMenuComponent } from './amano-menu.component';



describe('IchikaMenuComponent', () => {
  let component: AmanoMenuComponent;
  let fixture: ComponentFixture<AmanoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
