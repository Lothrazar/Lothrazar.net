export interface GithubIssue {
  url: string;
  number: number;
  title: string;
  state: string; // "open" "closed"
  labels: object[]; // each label has a name and color
  comments: number;
  locked: boolean;
}