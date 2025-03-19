import { Component } from '@angular/core';
import { Serv1Service } from '../servise/serv1.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private _f: Serv1Service) { }

  ngOnInit() { }


  ppp(data:any) {
    this._f.addpro(data).subscribe(() => { alert("product add susseccfully")})
  }
}
