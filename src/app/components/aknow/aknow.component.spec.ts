import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AknowComponent } from './aknow.component';

describe('AknowComponent', () => {
  let component: AknowComponent;
  let fixture: ComponentFixture<AknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
