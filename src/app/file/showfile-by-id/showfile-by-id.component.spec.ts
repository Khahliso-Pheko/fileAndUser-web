import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfileByIdComponent } from './showfile-by-id.component';

describe('ShowfileByIdComponent', () => {
  let component: ShowfileByIdComponent;
  let fixture: ComponentFixture<ShowfileByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfileByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfileByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
