import { Component } from '@angular/core';
import { Serv1Service } from '../servise/serv1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css'
})
export class GetproductComponent {
  constructor(private _p: Serv1Service, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.fgp();
}
  prod: any;
  ppp:any
  fgp() {
    this.ppp = this._active.snapshot.paramMap.get("id");

    this._p.grtproduct().subscribe((data) => { this.prod = data.filter((x: any) => x.categoryId == this.ppp); })
  }
}

