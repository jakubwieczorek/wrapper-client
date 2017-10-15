import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ToolComponent} from "./tool.component";

const toolRoutes: Routes = [
  {
    path: 'tool',
    component: ToolComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(toolRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToolRoutingModule { }
