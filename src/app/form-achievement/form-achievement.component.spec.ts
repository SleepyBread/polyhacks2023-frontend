import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAchievementComponent } from './form-achievement.component';

describe('FormAchievementComponent', () => {
  let component: FormAchievementComponent;
  let fixture: ComponentFixture<FormAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAchievementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
