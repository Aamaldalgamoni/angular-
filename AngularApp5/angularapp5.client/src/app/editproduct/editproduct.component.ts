import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  constructor(private _e: S1Service, private _active: ActivatedRoute) { }
  category: any;
  pppppro: any;
  id: any;
  ngOnInit() {
    this.id = this._active.snapshot.paramMap.get("id");
    this._e.pid(this.id).subscribe((data) => { this.pppppro = data; })
  }
 
  eedd(data: any) {
    this.id = this._active.snapshot.paramMap.get("id");

    this._e.upp(this.id, data).subscribe(() => { alert("edit sussccefuly") })

  }
}
