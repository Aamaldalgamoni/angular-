import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrl: './showproduct.component.css'
})
export class ShowproductComponent {
  constructor(private _pp: S1Service) { }

  ngOnInit() {
    this.gp();
}
  prod: any;
  gp() {
    this._pp.gpro().subscribe((data) => { this.prod = data; })
  }
}
