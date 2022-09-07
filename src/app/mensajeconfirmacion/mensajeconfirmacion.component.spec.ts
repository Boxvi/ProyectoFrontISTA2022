import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeconfirmacionComponent } from './mensajeconfirmacion.component';

describe('MensajeconfirmacionComponent', () => {
  let component: MensajeconfirmacionComponent;
  let fixture: ComponentFixture<MensajeconfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeconfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeconfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
