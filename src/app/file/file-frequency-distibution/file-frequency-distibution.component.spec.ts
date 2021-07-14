import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFrequencyDistibutionComponent } from './file-frequency-distibution.component';

describe('FileFrequencyDistibutionComponent', () => {
  let component: FileFrequencyDistibutionComponent;
  let fixture: ComponentFixture<FileFrequencyDistibutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileFrequencyDistibutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFrequencyDistibutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
