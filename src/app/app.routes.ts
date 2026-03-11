import { Routes } from '@angular/router';
import { EmployeeProfile } from './features/employees/components/employee-profile/employee-profile';
import { NotFound } from './shared/not-found/not-found';
import { EmployeeList } from './features/employees/components/employee-list/employee-list';
import { TrainingList } from './features/trainings/components/training-list/training-list';
import { Layout } from './layout/layout/layout';
import { EditEmployeeProfile } from './features/edit-employee-profile/edit-employee-profile';

export const routes: Routes = [

     { path: 'employees', component: EmployeeList },
     {
          path: 'layout', component: Layout,
          children: [ 
               { path: '', redirectTo: 'trainings', pathMatch: 'full' },
               { path: 'trainings', component: TrainingList },
               { path: 'employee-profile', component: EmployeeProfile },    
               {path:'edit-employee-profile',component:EditEmployeeProfile} 
          ]
     }
    , {path: '**', component: NotFound}
];
