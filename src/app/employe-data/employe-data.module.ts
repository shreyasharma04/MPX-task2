import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeDataRoutingModule } from './employe-data-routing.module';
import { EmployeDataComponent } from './employe-data.component';


@NgModule({
  declarations: [
    EmployeDataComponent
  ],
  imports: [
    CommonModule,
    EmployeDataRoutingModule
  ]
})
export class EmployeDataModule { }
