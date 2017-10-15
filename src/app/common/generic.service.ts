import {Http} from "@angular/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GenericService
{
  constructor(private http: Http)
  {

  }

  protected get(url: string)
  {
    return this.http.get(url).map((res) =>
    {
      return res;
    });
  }

  protected post(url:string, formData, options)
  {
    return this.http.post("http://localhost:8080/wrapper/file/upload/", formData, options)
      .map(res => GenericService.extractData(res))
      .catch(error => Observable.throw(error))
  }

  private static extractData(res)
  {
    return res.text() ? res.json() : {};
  }
}
