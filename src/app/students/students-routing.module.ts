import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudenthomeComponent } from './sudenthome/sudenthome.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {path:'',component:StudentsComponent,
children:[{path:'',component:SudenthomeComponent}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
