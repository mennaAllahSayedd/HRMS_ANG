import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../service/employee-service';
import { IEmployee } from '../../models/i-employee';

@Component({
  selector: 'app-edit-employee-profile',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-employee-profile.html',
  styleUrl: './edit-employee-profile.css',
})
export class EditEmployeeProfile implements OnInit {
  employee: IEmployee | null = null;
  form: Partial<IEmployee> = {};

  private readonly defaultEmployeeId = 1;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee(): void {
    this.employeeService.getEmployeeById(this.defaultEmployeeId).subscribe({
      next: (data) => {
        this.employee = data;
        this.form = {
          employeeNumber: data.employeeNumber,
          firstName: data.firstName,
          lastName: data.lastName ?? '',
          email: data.email,
          phone: data.phone ?? '',
          age: data.age,
          jobTile: data.jobTile ?? '',
          departmentId: data.departmentId,
          managerId: data.managerId,
        };
      },
      error: (err) => console.error(err),
    });
  }

  save(): void {
    // if (!this.employee) return;
    // const managerIdRaw = this.form.managerId;
    // const managerId =
    //   managerIdRaw !== undefined && managerIdRaw !== null && managerIdRaw !== ''
    //     ? Number(managerIdRaw)
    //     : null;
    // const updated: IEmployee = {
    //   employeeNumber: this.employee.employeeNumber,
    //   firstName: this.form.firstName ?? this.employee.firstName,
    //   lastName: this.form.lastName ?? undefined,
    //   email: this.form.email ?? this.employee.email,
    //   phone: this.form.phone ?? undefined,
    //   age: this.form.age ?? this.employee.age,
    //   jobTile: this.form.jobTile ?? this.employee.jobTile ?? null,
    //   departmentId: this.form.departmentId ?? this.employee.departmentId,
    //   managerId,
    // };
    // this.employeeService.updateEmployee(updated).subscribe({
    //   next: () => this.loadEmployee(),
    //   error: (err) => console.error(err),
    // });
  }
}
