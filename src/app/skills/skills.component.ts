import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Skills } from '../models/models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit,AfterViewInit {
  skills:Skills[];
  myFlagForButtonToggle : any;
  constructor(private profileService : ProfileService) {

   }

  ngOnInit(): void {
    // this.skills= ["Angular 2 to latest", "HTML", "CSS", "SCSS", "Typescript", "JavaScript with ES 6", "Visual Studio Code", "SQL", "UNIX", "GitHub", "Bit bucket", "GitLabs", "REST", "API", "Jenkins", "AWS S3", "Bootstrap", "Angular Materials", "ITIL ® Certified", "Incident, Change, Problem Management", "JIRA", "VSTS", "HP service Manager & Service Now"];
this.profileService.getSkills().subscribe( skills => {
this.skills  = skills
  console.log("skills",skills)
});
  }

  ngAfterViewInit(){
    // this.skills= ["Angular 2 to latest", "HTML", "CSS", "SCSS", "Typescript", "JavaScript with ES 6", "Visual Studio Code", "SQL", "UNIX", "GitHub", "Bit bucket", "GitLabs", "REST", "API", "Jenkins", "AWS S3", "Bootstrap", "Angular Materials", "ITIL ® Certified", "Incident, Change, Problem Management", "JIRA", "VSTS", "HP service Manager & Service Now"];
  }
}

