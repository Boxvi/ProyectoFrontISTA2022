import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpersonaComponent } from './crearpersona.component';

describe('CrearpersonaComponent', () => {
  let component: CrearpersonaComponent;
  let fixture: ComponentFixture<CrearpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
