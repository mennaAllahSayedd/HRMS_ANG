import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../service/leave-service';
import { ILeave } from '../../models/ileave';

@Component({
  selector: 'app-leave-list',
  imports: [CommonModule],
  templateUrl: './leave-list.html',
  styleUrl: './leave-list.css',
})
export class LeaveList implements OnInit {
  leaves: ILeave[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves(): void {
    this.leaveService.getAllLeaves().subscribe({
      next: (data) => (this.leaves = data ?? []),
      // next: (data) => (console.log(this.leaves)),
      error: (err) => console.error(err),
    });
  }

  acceptRequest(leave: ILeave): void {
    this.leaveService.acceptLeave(leave.id).subscribe({
      next: () => this.loadLeaves(),
      error: (err) => console.error(err),
    });
  }

  deleteRequest(leave: ILeave): void {
    if (!confirm(`Reject / delete this leave request?`)) return;
    this.leaveService.deleteLeave(leave.id).subscribe({
      next: () => this.loadLeaves(),
      error: (err) => console.error(err),
    });
  }

  displayEmployee(leave: ILeave): string {
    return leave.employeeName ?? `Employee #${leave.employeeId}`;
  }
}
