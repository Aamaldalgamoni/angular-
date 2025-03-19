import { Component } from '@angular/core';
import { Serv1Service } from '../servise/serv1.service';

@Component({
  selector: 'app-getcategory',
  templateUrl: './getcategory.component.html',
  styleUrl: './getcategory.component.css'
})
export class GetcategoryComponent {
  constructor(private _d: Serv1Service) { }
  ngOnInit() {
   
  }
  da: any;
  grtc() {
   
    this._d.grtcategory().subscribe((data) => { this.da = data; })
  }
}
