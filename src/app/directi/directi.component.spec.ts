import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiComponent } from './directi.component';

describe('DirectiComponent', () => {
  let component: DirectiComponent;
  let fixture: ComponentFixture<DirectiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
