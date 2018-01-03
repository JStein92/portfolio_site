import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  email = "JonathanStein@Live.com";
  phone = "425-214-6105";
  constructor() { }

  ngOnInit() {
  }

}
