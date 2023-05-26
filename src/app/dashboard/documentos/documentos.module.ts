import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { DocumentosService } from './documentos.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MgrPipeModule } from 'src/app/core/pipe/mgr-pipe.module';
import { DatatableModule } from 'src/app/shared/datatable/datatable.module';




@NgModule({
  declarations: [
    DocumentosComponent
  ],
  imports: [
    CommonModule,DatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MgrPipeModule,
  ],
  providers:[DocumentosService]
})
export class DocumentosModule { }
