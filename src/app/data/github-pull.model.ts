export interface GithubPull {
  url: string;
  number: number;
  title: string;
  state: string; // "open" "closed"
  labels: object[]; // each label has a name and color
}