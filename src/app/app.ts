import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeSidebar} from '../app/shared/employee-sidebar/employee-sidebar'
import { Navbar } from './shared/navbar/navbar';
import { NotFound } from './shared/not-found/not-found';
import { EmployeeList } from './features/employees/components/employee-list/employee-list';
import { TrainingList } from './features/trainings/components/training-list/training-list';

@Component({
  selector: 'app-root',
  imports: [ TrainingList,EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HRMS_ANG');

  letters: string[] = ['A', 'B', 'C', 'D'];
}
