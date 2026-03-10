import { Component, OnInit } from '@angular/core';
import { ITraining } from '../../models/i-training';
import { TrainingService } from '../../service/training-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-list',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './training-list.html',
styleUrls: ['./training-list.css'],
})
export class TrainingList implements OnInit {
  trainings:ITraining[]=[];

  constructor(private trainingService:TrainingService){}

  ngOnInit():void{
    this.loadTrainings();
  }
  loadTrainings(){
    this.trainingService.getAllTrainings().subscribe({
       next:(data) => this.trainings=data,
       error:(err) =>console.error(err)
    })
  }
}
