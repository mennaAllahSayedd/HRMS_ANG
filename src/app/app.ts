import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeSidebar} from '../app/shared/employee-sidebar/employee-sidebar'
import { Navbar } from './shared/navbar/navbar';
import { NotFound } from './shared/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,EmployeeSidebar ,Navbar,NotFound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HRMS_ANG');

  letters: string[] = ['A', 'B', 'C', 'D'];
}
