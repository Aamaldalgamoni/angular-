import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private _http: HttpClient) { }

  gc() {
    return this._http.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  upc(id:any,data:any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`,data )
  }

  cid(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }



  //product


  gpro() {
    return this._http.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }

  upp(id: any, data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data)
  }
  pid(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }
}
