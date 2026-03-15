import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILeave } from '../models/ileave';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private apiUrl = 'api/hrms/leaves/api/leaves';

  constructor(private http: HttpClient) {}

  getAllLeaves(): Observable<ILeave[]> {
    return this.http.get<ILeave[]>(`/${this.apiUrl}/all`);
  }

  getLeaveById(id: number): Observable<ILeave> {
    return this.http.get<ILeave>(`${this.apiUrl}/${id}`);
  }

  acceptLeave(id: number): Observable<ILeave> {
    return this.http.patch<ILeave>(`/${this.apiUrl}/${id}/approve`, {});
  }

  deleteLeave(id: number): Observable<void> {
    return this.http.delete<void>(`/${this.apiUrl}/${id}/reject`);
  }
}
