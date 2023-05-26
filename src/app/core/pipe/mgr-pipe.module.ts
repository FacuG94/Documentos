import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicoPipe } from './dinamico.pipe';
import { TrimValueDirective } from './trim-value.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DinamicoPipe,TrimValueDirective],
    exports: [DinamicoPipe, TrimValueDirective],
})
export class MgrPipeModule { }
