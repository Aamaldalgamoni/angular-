import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';

@Component({
  selector: 'app-viewvoucher',
  templateUrl: './viewvoucher.component.html',
  styleUrl: './viewvoucher.component.css'
})
export class ViewvoucherComponent {

  constructor(private _v: S1Service) { }

  ngOnInit() {
    this.viewall();
  }
  o: any;
  viewall() {
    this._v.vvo().subscribe((data) => { this.o = data; })
  }
}
