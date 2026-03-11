import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../service/employee-service';
import { IEmployee } from '../../models/i-employee';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-profile.html',
  styleUrls: ['./employee-profile.css'],
})
export class EmployeeProfile implements OnInit {

  employee?: IEmployee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee() {
    const id = 1234;
    this.employeeService.getEmployeeById(id).subscribe({
        next: (data) => {
          console.log(data)
          this.employee = data;
      },
      error: (err) => console.error(err)
    });
  }

  get fullName(): string {
    if (!this.employee) return '';
    return `${this.employee.firstName} ${this.employee.lastName ?? ''}`;
  }

}