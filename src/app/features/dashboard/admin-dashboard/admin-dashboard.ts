import { Component } from '@angular/core';
import { Navbar } from "../../../shared/navbar/navbar";
import { AdminSidebar } from "../../../shared/admin-sidebar/admin-sidebar";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  imports: [Navbar, AdminSidebar, RouterOutlet],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {}
