import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private _sign: S1Service) { }

  ngOnInit() { }

  //الي بين اقواس رح ياخدها من الفورم حرة شو اسميها
  sp(data: any) {
    this._sign.postdata(data).subscribe((reponse) => {alert("sogn up susseccfuly")
      // ✅ تخزين بيانات المستخدم في Local Storage
      localStorage.setItem('currentUser', JSON.stringify(data));
    })
  }
}
