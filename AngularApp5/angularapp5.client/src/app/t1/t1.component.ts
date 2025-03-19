import { Component } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrl: './t1.component.css'
})


export class T1Component {

  //1️⃣ DatePipe - تنسيق التواريخ 📅
  //🔹 يُستخدم DatePipe في Angular لتحويل التواريخ إلى تنسيقات مختلفة بسهولة.
  //🔹 يمكن تحديد التنسيق المطلوب باستخدام القيم المتاحة مثل shortDate, mediumDate, fullDate, إلخ.
  today: Date = new Date();





//  2️⃣ JsonPipe - تحويل الكائنات إلى JSON 🛠️
//🔹 JsonPipe يُستخدم لعرض الكائنات(Objects) أو المصفوفات(Arrays) بصيغة JSON في HTML.

  user = {
    name: "Ali",
    age: 25,
    job: "Developer",
    skills: ["Angular", "TypeScript", "JavaScript"]
  };


  //h: string = "hello";
}
