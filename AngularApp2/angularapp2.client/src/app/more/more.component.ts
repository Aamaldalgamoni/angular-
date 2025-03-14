import { Component } from '@angular/core';

import { TestserviseService } from '../servise/testservise.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})
export class MoreComponent {

  constructor(private _s: TestserviseService, private _active: ActivatedRoute) { }


  ngOnInit() { this.f2(); }
  categorydata: any;
 

  id: any;
  f2() {
    this.id = this._active.snapshot.paramMap.get("id");
    this._s.getcategtybyid().subscribe((data) => {
      this.categorydata = data.filter((x: any) => x.id == this.id)

      })
  }


}
