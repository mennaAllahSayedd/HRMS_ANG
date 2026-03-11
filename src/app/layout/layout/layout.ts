import { Component } from '@angular/core';
import { EmployeeSidebar } from '../../shared/employee-sidebar/employee-sidebar';
import { Navbar } from '../../shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { TrainingList } from "../../features/trainings/components/training-list/training-list";

@Component({
  selector: 'app-layout',
  imports: [EmployeeSidebar, Navbar, RouterOutlet, TrainingList],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
