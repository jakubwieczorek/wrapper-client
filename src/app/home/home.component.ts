import { Component, OnInit } from '@angular/core';
import {ToolService} from "../tool/service/tool.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _toolService: ToolService) { }

  ngOnInit() {
  }

  upload($event)
  {
    console.log('siema1');

    this._toolService.getFile($event).subscribe
    (
      data => console.log('success'),
      error => console.log(error)
    );
  }
}
