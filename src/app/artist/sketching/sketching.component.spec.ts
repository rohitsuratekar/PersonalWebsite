import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchingComponent } from './sketching.component';

describe('SketchingComponent', () => {
  let component: SketchingComponent;
  let fixture: ComponentFixture<SketchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
