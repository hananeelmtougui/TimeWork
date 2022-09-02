import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantTaskComponent } from './consultant-task.component';

describe('ConsultantTaskComponent', () => {
  let component: ConsultantTaskComponent;
  let fixture: ComponentFixture<ConsultantTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
