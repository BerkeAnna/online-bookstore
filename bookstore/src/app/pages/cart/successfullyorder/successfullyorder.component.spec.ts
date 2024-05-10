import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyorderComponent } from './successfullyorder.component';

describe('SuccessfullyorderComponent', () => {
  let component: SuccessfullyorderComponent;
  let fixture: ComponentFixture<SuccessfullyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfullyorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessfullyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
