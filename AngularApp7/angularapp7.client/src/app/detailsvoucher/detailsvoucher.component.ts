import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsvoucher',
  templateUrl: './detailsvoucher.component.html',
  styleUrl: './detailsvoucher.component.css'
})
export class DetailsvoucherComponent {

  constructor(private _vv: S1Service, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.detalv();
  }
  vouid: any;
  f: any;
  detalv() {
    this.vouid = this._active.snapshot.paramMap.get("id");//هاي ممكن اكتفي باللي موجودة فوق واضل ماسكها وخلص بس تكرارها هون مش غلط بس مش best case
    this._vv.vvo().subscribe(data => {
      // تصفية المصفوفة لاختيار المنتج الذي يطابق الـ id
      this.f = data.find((item: any) => item.id == this.vouid);
    
     });

}
}
