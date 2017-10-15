import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ToolComponent} from "./tool.component";
import {ToolRoutingModule} from "./tool-routing.module";
import {ToolService} from "./service/tool.service";
import {GenericService} from "../common/generic.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolRoutingModule
  ],
  providers: [
    ToolService,
    GenericService
  ],
  declarations: [ToolComponent]
})
export class ToolModule { }
