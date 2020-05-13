import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { IModPage } from 'src/app/data/IModPage';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.css']
})
export class WidgetGithubComponent implements OnInit {
  @Input() mod: IModPage;
  issues: GithubIssue[] = null;
  assigned: number;
  unlabelled: number;
  uncommented: number;

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
  }

  getIssues(): void {
    //MAKE INTERFACE for response
    // SERVICE. and toggle between mock mode responses and non
    // COUNT HOW MANY HAVE NO LABELS at all . and count total
    // COUNT how many have "assignees" > 0

    if(!this.issues) {
      console.info('Accessing github API...');
      this.githubService.getIssues(this.mod.githubId)
        .subscribe((data) => this.onLoadIssues(data), (error) => this.onFailIssues(error));
    }
    else {
      console.info('Issues cached');
      this.parseIssues();
    }
}

  onFailIssues(data): void {
    console.error('rate limited', data);
  }

  onLoadIssues(data): void {
    console.log(data);
    if(data) {
      this.issues = data;
      this.parseIssues();
    }
  }

  private parseIssues(): void {
    this.assigned = 0;
    this.unlabelled = 0;
    this.uncommented = 0;
    for(var issue of this.issues) {
      if(issue.labels.length == 0) {
        this.unlabelled++;
      }
      if(issue.assignees.length > 0) {
        this.assigned++;
      }
      if(issue.comments == 0) {
        this.uncommented++;
      }
    }

  }
}
