import { Component } from '@angular/core';
import { TestserviseService } from '../servise/testservise.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teatpage',
  templateUrl: './teatpage.component.html',
  styleUrl: './teatpage.component.css'
})
export class TeatpageComponent {
  //two way binding
  username = ' ';
  //string interpolation
  title: string = "hi";

  //propetiry binding
  imageUrl: string = "https://static.vecteezy.com/system/resources/previews/013/951/366/large_2x/sea-ocean-beach-sunset-sunrise-landscape-outdoor-water-wave-with-white-foam-beautiful-sunset-colorful-sky-with-clouds-natural-island-sun-rays-seascape-dream-nature-inspirational-shore-coast-photo.jpg";
  isdisable: boolean = true;
  hidden: boolean = false;
  inertext: string = "licky for every day";

  //event binding
  handelclick() {
    alert("pease for every day");
  }
  constructor(private _s: TestserviseService) {
    this._s.printcomponent();
  }


  ngOnInit() {
    this.getdata();
  }


  categorydata: any;
  getdata() {
    this._s.getcategory().subscribe((data) => { this.categorydata = data; })
  }
}

