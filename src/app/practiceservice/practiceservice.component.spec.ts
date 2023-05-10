import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeserviceComponent } from './practiceservice.component';

describe('PracticeserviceComponent', () => {
  let component: PracticeserviceComponent;
  let fixture: ComponentFixture<PracticeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
