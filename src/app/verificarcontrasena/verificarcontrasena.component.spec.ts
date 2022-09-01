import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarcontrasenaComponent } from './verificarcontrasena.component';

describe('VerificarcontrasenaComponent', () => {
  let component: VerificarcontrasenaComponent;
  let fixture: ComponentFixture<VerificarcontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarcontrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarcontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
