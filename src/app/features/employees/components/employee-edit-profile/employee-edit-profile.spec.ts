import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditProfile } from './employee-edit-profile';

describe('EmployeeEditProfile', () => {
  let component: EmployeeEditProfile;
  let fixture: ComponentFixture<EmployeeEditProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEditProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeEditProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
