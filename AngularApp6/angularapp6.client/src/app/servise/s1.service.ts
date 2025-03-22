import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private _http: HttpClient) { }


  postdata(data:any) {
    return this._http.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users",data)
  }


  getdata() {
    return this._http.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }
}
