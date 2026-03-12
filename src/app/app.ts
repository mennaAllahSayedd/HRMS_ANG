import { Component, signal } from '@angular/core';
import { Layout } from './features/dashboard/layout/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HRMS_ANG');

  letters: string[] = ['A', 'B', 'C', 'D'];
}
