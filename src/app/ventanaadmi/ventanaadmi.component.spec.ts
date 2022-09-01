import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaadmiComponent } from './ventanaadmi.component';

describe('VentanaadmiComponent', () => {
  let component: VentanaadmiComponent;
  let fixture: ComponentFixture<VentanaadmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaadmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaadmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
