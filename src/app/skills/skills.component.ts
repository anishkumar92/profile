import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills= ["Angular 2 to latest", "HTML", "CSS", "SCSS", "Typescript", "JavaScript with ES 6", "Visual Studio Code", "SQL", "UNIX", "GitHub", "Bit bucket", "GitLabs", "REST", "API", "Jenkins", "AWS S3", "Bootstrap", "Angular Materials", "ITIL ® Certified", "Incident, Change, Problem Management", "JIRA", "VSTS", "HP service Manager & Service Now"];
  myFlagForButtonToggle : string;
  constructor() {

   }

  ngOnInit(): void {
  }
}

