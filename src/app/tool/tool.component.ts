import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToolService} from "./service/tool.service";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolComponent implements OnInit {

  constructor(private _toolService: ToolService) { }

  ngOnInit()
  {
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
