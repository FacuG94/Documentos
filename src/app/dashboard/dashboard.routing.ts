import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { DocumentosComponent } from './documentos/documentos.component';





export const routes: Routes = [
  { path: '', redirectTo: 'gestor-de-documentos/documentos', pathMatch: 'full' },
  {path: 'gestor-de-documentos/documentos', component: DocumentosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasboardRoutingModule {}
