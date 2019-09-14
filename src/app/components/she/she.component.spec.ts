import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheComponent } from './she.component';

describe('SheComponent', () => {
  let component: SheComponent;
  let fixture: ComponentFixture<SheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
