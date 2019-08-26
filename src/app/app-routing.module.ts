import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const route:Routes=[
  {path:'admin',loadChildren:'src/app/admin/admin.module#AdminModule'},
  {path:'students',loadChildren:'src/app/students/students.module#StudentsModule'},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
  
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
