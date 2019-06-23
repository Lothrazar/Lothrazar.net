interface GithubIssue {
    number: number;
    title: string;
    labels: object[];
    assignees: object[];
    comments: number;
}