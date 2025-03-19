import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  constructor(private _http: HttpClient) { }


  grtcategory() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  allproo() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  addpro(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products",data)
  }
  grtproduct() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  addcat(data:any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }
  // دالة لإضافة منتج جديد
  addProductToCategory(data: any) {
    return this._http.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }
}
