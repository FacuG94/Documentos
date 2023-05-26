import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DasboardRoutingModule } from './dashboard.routing';
import { RouterModule } from '@angular/router';

import { DocumentosModule } from './documentos/documentos.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DasboardRoutingModule,
    RouterModule,
    DocumentosModule,FormsModule

  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
