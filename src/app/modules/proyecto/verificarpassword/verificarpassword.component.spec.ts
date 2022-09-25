import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarpasswordComponent } from './verificarpassword.component';

describe('VerificarpasswordComponent', () => {
  let component: VerificarpasswordComponent;
  let fixture: ComponentFixture<VerificarpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
