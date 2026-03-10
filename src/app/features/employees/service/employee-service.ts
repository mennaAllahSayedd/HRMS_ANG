import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/i-employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

    private apiUrl = '/api/hrms/users/api/employees';

     constructor(private http: HttpClient){}

     getAllEmployees():Observable<IEmployee[]>{
      
      console.log(this.http.get<IEmployee[]>(this.apiUrl));
      return this.http.get<IEmployee[]>(this.apiUrl);
     }

}
