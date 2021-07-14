import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFilesComponent } from './show-all-files.component';

describe('ShowAllFilesComponent', () => {
  let component: ShowAllFilesComponent;
  let fixture: ComponentFixture<ShowAllFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
