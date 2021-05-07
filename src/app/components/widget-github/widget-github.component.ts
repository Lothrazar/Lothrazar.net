import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { StorageService } from 'src/app/services/';
import { GithubIssue, GithubPull, IModPage } from 'src/app/data/';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.css']
})
export class WidgetGithubComponent implements OnInit {
  @Input() mod: IModPage;
  showButton: boolean;
  issues: GithubIssue[] = [];
  pulls: GithubPull[] = [];
  assigned: number;
  unlabelled: number;
  uncommented: number;

  private issuesKey: string;
  private pullsKey: string;

  constructor(private githubService:GithubService,
    private storage: StorageService) { }

  ngOnInit(): void {
    this.issuesKey = this.mod.githubId + "_issues";
    this.pullsKey = this.mod.githubId + "_pulls";
    //TODO : reload from storage service
    // then if none, go api
    this.issues = this.storage.getJson(this.issuesKey);
    this.pulls = this.storage.getJson(this.pullsKey);
    console.info('issues from storage ', this.issues);
    console.info('pulls from storage ', this.pulls);
    this.showButton = (!this.issues || !this.pulls);
  }

  getGithubData(): void {
    if(!this.issues) {
      console.info('Accessing github issues API...');
      this.githubService.getIssues(this.mod.githubId)
        .subscribe((data) => this.onLoadIssues(data || []), (error) => this.onApiError(error));
    }
    if(!this.pulls) {
      console.info('Accessing github pulls API...');
      this.githubService.getPulls(this.mod.githubId)
        .subscribe((data) => this.onLoadPulls(data || []), (error) => this.onApiError(error));
    }
    console.info('issues  ', this.issues);
    console.info('pulls  ', this.pulls);
  }

  onApiError(err): void {
    console.error('error from API', err);
    this.showButton = true;
  }

  onLoadPulls(data): void {
    this.pulls = data;
    console.log('PR size', data?.length);
    if(this.pulls) {
      this.storage.put(this.pullsKey, this.pulls);
    }
    
  }

  onLoadIssues(data): void {
    this.issues = data;
    if(this.issues) {
      this.storage.put(this.issuesKey, this.issues);
    }
    console.log('issues size', data?.length);
    this.unlabelled = 0;
    this.uncommented = 0;
    for(var issue of this.issues) {
      if(issue.labels.length == 0) {
        this.unlabelled++;
      }
      if(issue.comments == 0) {
        this.uncommented++;
      }
    }
  } 
}
