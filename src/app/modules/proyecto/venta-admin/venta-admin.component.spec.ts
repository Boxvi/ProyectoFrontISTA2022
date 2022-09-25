import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAdminComponent } from './venta-admin.component';

describe('VentaAdminComponent', () => {
  let component: VentaAdminComponent;
  let fixture: ComponentFixture<VentaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
