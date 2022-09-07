import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionusuarioComponent } from './configuracionusuario.component';

describe('ConfiguracionusuarioComponent', () => {
  let component: ConfiguracionusuarioComponent;
  let fixture: ComponentFixture<ConfiguracionusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
