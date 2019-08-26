import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiveService } from './service/servive.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { customselectvalidator } from './Shared/validator';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
    ,customselectvalidator,PagenotfoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,FormsModule,BsDatepickerModule.forRoot(), AppRoutingModule
  ],
  providers: [ServiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
