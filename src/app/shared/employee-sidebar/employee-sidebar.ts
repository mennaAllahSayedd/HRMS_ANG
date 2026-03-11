import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-sidebar',
  imports: [RouterLink],
  templateUrl: './employee-sidebar.html',
  styleUrl: './employee-sidebar.css',
})
export class EmployeeSidebar {

  
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id);
}
}
