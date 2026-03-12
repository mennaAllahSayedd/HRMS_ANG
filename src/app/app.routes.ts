import { Routes } from '@angular/router';
import { EmployeeProfile } from './features/employees/components/employee-profile/employee-profile';
import { NotFound } from './shared/not-found/not-found';
import { EmployeeList } from './features/employees/components/employee-list/employee-list';
import { TrainingList } from './features/trainings/components/training-list/training-list';
import { Layout } from './features/dashboard/layout/layout';
import { EditEmployeeProfile } from './features/employees/components/edit-employee-profile/edit-employee-profile';
import { AdminDashboard } from './features/dashboard/admin-dashboard/admin-dashboard';

export const routes: Routes = [

     {path:'admin-dashboard', component:AdminDashboard,
          children:[
               {path:'employees',component:EmployeeList}
          ]
     },
     {
          path: 'layout', component: Layout,
          children: [ 
               { path: '', redirectTo: 'trainings', pathMatch: 'full' },
               { path: 'trainings', component: TrainingList },
               {path:'edit-employee-profile',component:EditEmployeeProfile} ,
               { path: 'employee-profile', component: EmployeeProfile},    
          ] 
     }
    , {path: '**', component: NotFound}
];
