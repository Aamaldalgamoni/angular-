import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {

  constructor(private _e: S1Service, private _active: ActivatedRoute) { }
  category: any;
  categoryyyyyyy: any;
  categoryId: any;
  ngOnInit() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._e.cid(this.categoryId).subscribe((data) => { this.categoryyyyyyy = data; })
  }

  eedd(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._e.upc(this.categoryId, data).subscribe(() => {alert("edit sussccefuly") })

  }
}
