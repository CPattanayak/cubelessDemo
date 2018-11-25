import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileloaderComponent } from './fileloader.component';

describe('FileloaderComponent', () => {
  let component: FileloaderComponent;
  let fixture: ComponentFixture<FileloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
