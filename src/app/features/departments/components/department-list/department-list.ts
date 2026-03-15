import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../service/department-service';
import { Idepartment } from '../../models/idepartment';

@Component({
  selector: 'app-department-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css',
})
export class DepartmentList implements OnInit {
  departments: Idepartment[] = [];
  editingDepartment: Idepartment | null = null;
  editForm: { name: string; description: string } = { name: '', description: '' };

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartment().subscribe({
      next: (data) => (this.departments = data ?? []),
      error: (err) => console.error(err),
    });
  }

  startEdit(dept: Idepartment): void {
    this.editingDepartment = dept;
    this.editForm = { name: dept.name, description: dept.description ?? '' };
  }

  cancelEdit(): void {
    this.editingDepartment = null;
    this.editForm = { name: '', description: '' };
  }

  saveEdit(): void {
    if (!this.editingDepartment) return;
    const updated: Idepartment = {
      ...this.editingDepartment,
      name: this.editForm.name,
      description: this.editForm.description,
    };
    this.departmentService.updateDepartment(updated).subscribe({
      next: () => {
        this.loadDepartments();
        this.cancelEdit();
      },
      error: (err) => console.error(err),
    });
  }

  deleteDepartment(dept: Idepartment): void {
    if (!confirm(`Delete department "${dept.name}"?`)) return;
    const id = dept.department_Number;
    this.departmentService.deleteDepartment(id).subscribe({
      next: () => this.loadDepartments(),
      error: (err) => console.error(err),
    });
  }
}
