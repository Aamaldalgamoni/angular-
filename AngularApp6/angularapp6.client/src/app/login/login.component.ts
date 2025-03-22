import { Component } from '@angular/core';
import { S1Service } from '../servise/s1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _l: S1Service) { }

  ngOnInit() { }

  
 
  //user:any
  // الي بين اقواس هي رح ياخدها من فورم حرة شو اسميها
  sig(entereduser:any) {
    this._l.getdata().subscribe((data) => {
      let user = data.find((x: any) => x.name == entereduser.name && x.password == entereduser.password);
      if (user) {
        alert("found the user done")

      } else {
        alert("user not exest")
      }
    })
  }
}
