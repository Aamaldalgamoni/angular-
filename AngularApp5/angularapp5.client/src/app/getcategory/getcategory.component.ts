import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';

@Component({
  selector: 'app-getcategory',
  templateUrl: './getcategory.component.html',
  styleUrl: './getcategory.component.css'
})
export class GetcategoryComponent {
  constructor(private _a: S1Service) { }

  ngOnInit() {
    this.getc()
}

  b:any
  getc() {
    this._a.gc().subscribe((data) => { this.b = data; })
  }
}
