import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getPulls(githubId: string): Observable<any> {
    return this.http.get('https://api.github.com/repos/lothrazar/' + githubId + '/pulls?state=open');
  }
  /**
   * @return observable of GithubIssue[]
   * @param githubId
   */
  getIssues(githubId: string): Observable<any> {
    return this.http.get('https://api.github.com/repos/lothrazar/' + githubId + '/issues?page=0&per_page=100');
  }
}
