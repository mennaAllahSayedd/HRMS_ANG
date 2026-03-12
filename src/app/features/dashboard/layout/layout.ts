import { Component } from '@angular/core';
import { EmployeeSidebar } from '../../../shared/employee-sidebar/employee-sidebar';
import { Navbar } from '../../../shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [EmployeeSidebar, Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
