import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idepartment } from '../models/idepartment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  
    private apiUrl = '/api/hrms/users/api/departments';

     constructor(private http: HttpClient){}

     getAllDepartment():Observable<Idepartment[]>{
        return this.http.get<Idepartment[]>(`${this.apiUrl}/all`);
     }

     getDepartmentById(id: number): Observable<Idepartment> {
         return this.http.get<Idepartment>(`${this.apiUrl}/${id}`);
     }
   
     updateDepartment(department: Idepartment): Observable<Idepartment> {
       return this.http.put<Idepartment>(`${this.apiUrl}/edit`, department);
     }

     deleteDepartment(id: number): Observable<void> {
       return this.http.delete<void>(`${this.apiUrl}/${id}`);
     }
}
