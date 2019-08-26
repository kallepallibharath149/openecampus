import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SudenthomeComponent } from './sudenthome/sudenthome.component';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [SudenthomeComponent, StudentsComponent ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
