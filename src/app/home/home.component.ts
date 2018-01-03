import { Component, OnInit } from '@angular/core';
import { WebProjects } from '../web-projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [WebProjects]
})
export class HomeComponent implements OnInit {

  constructor(public webProjects : WebProjects) { }
  projects = this.webProjects.projects;
  header = "Web developer and programming enthusiast";
  ngOnInit() {
  }

}
