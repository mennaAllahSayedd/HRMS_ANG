import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/i-employee';
import { EmployeeService } from '../../service/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  
  employees :IEmployee[]=[];

  constructor(private employeeService:EmployeeService){}

    ngOnInit(): void {
    this.loadEmployees(); }

  loadEmployees(){
    this.employeeService.getAllEmployees().subscribe({
      next:(data) => this.employees=data,
      error:(err) =>console.error(err)
    });
  }


}
