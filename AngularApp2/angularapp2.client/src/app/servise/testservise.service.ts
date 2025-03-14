import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//step one
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TestserviseService {
  printcomponent() {
    console.log("hhhhhhhhhh");
  }

  constructor(private _http: HttpClient, private _active: ActivatedRoute) { }; //step two

getcategory() {//step three
  return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  getcategtybyid() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}")

  }
}
