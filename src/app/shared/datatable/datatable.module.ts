//Native Imports
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
//Components Imports
import {DatatableComponent} from "./datatable.component";
import { ExcelService } from "./excel.service";
import { MgrPipeModule } from "./../../core/pipe/mgr-pipe.module";
import { MgrLoadingModule } from '../mgr-loading/mgr-loading.module';
import { DoubleScrollModule } from 'mindgaze-doublescroll';


@NgModule({
  //Declarations
  declarations: [
    DatatableComponent,
  ],
  //Imports
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MgrPipeModule,
    VirtualScrollerModule,
    MgrLoadingModule,
    DoubleScrollModule
  ],
  //Exports
  exports: [
    DatatableComponent,
  ],
  providers: [ExcelService,
  ]
})

export class DatatableModule {}
