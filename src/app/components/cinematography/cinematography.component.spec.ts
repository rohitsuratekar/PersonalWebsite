import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematographyComponent } from './cinematography.component';

describe('CinematographyComponent', () => {
  let component: CinematographyComponent;
  let fixture: ComponentFixture<CinematographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinematographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
