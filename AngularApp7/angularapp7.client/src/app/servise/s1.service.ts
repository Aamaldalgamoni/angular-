import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private _http: HttpClient) { }


  vvo() {
    return this._http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }

  //vd(id: any) {
  //  return this._http.get<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`);
  //}

  edv(data: any, id: any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data);
  }


  creatvou(data: any) {
    return this._http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data)
  }
}
