import {Injectable, Input} from '@angular/core';
import {GenericService} from "../../common/generic.service";
import {Http, RequestOptions, ResponseContentType} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ToolService extends GenericService
{
  constructor(private httpT: Http)
  {
    super(httpT);
  }

  public getFile(event)
  {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0)
    {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      let options = new RequestOptions(headers);

      return super.post("http://localhost:8080/wrapper/file/upload/", formData, options);
    }
  }
}
