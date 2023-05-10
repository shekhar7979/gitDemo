import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TempletDrivenComponent } from './templet-driven.component';

describe('TempletDrivenComponent', () => {
  let component: TempletDrivenComponent;
  let fixture: ComponentFixture<TempletDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
