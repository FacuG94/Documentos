import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgrLoadingComponent } from './mgr-loading.component'

// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SmartadminModule } from '../../shared/smartadmin.module';
// import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';

@NgModule({
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // SmartadminModule,
    // SmartadminInputModule,
    // RouterModule,
    // FormsModule,
    // ReactiveFormsModule,
    // SmartadminModule,
    // SmartadminInputModule
  ],
  exports: [MgrLoadingComponent],
  declarations: [MgrLoadingComponent]
})
export class MgrLoadingModule { }
