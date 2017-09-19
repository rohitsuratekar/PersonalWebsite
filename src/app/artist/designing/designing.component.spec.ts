import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigningComponent } from './designing.component';

describe('DesigningComponent', () => {
  let component: DesigningComponent;
  let fixture: ComponentFixture<DesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
