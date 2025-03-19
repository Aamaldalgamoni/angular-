import { Component } from '@angular/core';
import { Serv1Service } from '../servise/serv1.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private _ca: Serv1Service) { }

  ngOnInit() { }

  addc(data:any) {
    this._ca.addcat(data).subscribe(() => {alert("added sussefully") })
  }
}
