import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeProfile } from './edit-employee-profile';

describe('EditEmployeeProfile', () => {
  let component: EditEmployeeProfile;
  let fixture: ComponentFixture<EditEmployeeProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmployeeProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmployeeProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
