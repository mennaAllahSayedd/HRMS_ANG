import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITraining } from '../models/i-training';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {

  private apiUrl = "/api/hrms/trainings/api/trainings/all";

  constructor(private http:HttpClient){}

  getAllTrainings():Observable<ITraining[]>{

    return this.http.get<ITraining[]>(this.apiUrl);
  }
}
