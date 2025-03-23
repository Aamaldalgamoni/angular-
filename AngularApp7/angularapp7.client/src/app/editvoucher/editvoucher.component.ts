import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editvoucher',
  templateUrl: './editvoucher.component.html',
  styleUrl: './editvoucher.component.css'
})
export class EditvoucherComponent {
  constructor(private _e: S1Service, private _action: ActivatedRoute) { }
  g:any
  id:any
  ngOnInit() {
    this.id = this._action.snapshot.paramMap.get("id");
    this._e.vvo().subscribe(data => {
      // تصفية المصفوفة لاختيار المنتج الذي يطابق الـ id
      this.g = data.find((item: any) => item.id == this.id);})
    
  }
  edvou(data: any) {
    this.id = this._action.snapshot.paramMap.get("id");
    this._e.edv(this.id,data).subscribe(() => {alert("edit sucsess") })

  }
}
