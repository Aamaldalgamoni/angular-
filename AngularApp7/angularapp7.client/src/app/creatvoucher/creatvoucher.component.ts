import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatvoucher',
  templateUrl: './creatvoucher.component.html',
  styleUrl: './creatvoucher.component.css'
})
export class CreatvoucherComponent {
  constructor(private _c: S1Service, private _action: ActivatedRoute) { }


  ngOnInit() { }
  cree(data: any) {
    this._c.creatvou(data).subscribe(response => {
      alert("regesteration sucssess");
    })
  }
}
