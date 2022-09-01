import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescontrasenaComponent } from './rescontrasena.component';

describe('RescontrasenaComponent', () => {
  let component: RescontrasenaComponent;
  let fixture: ComponentFixture<RescontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescontrasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
