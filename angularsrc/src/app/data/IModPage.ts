export interface IModPage {
    name: string;
    curseId: number;
    curseSlug: string;
    githubId: string;
    hidden?: boolean;
    versions: string[];
}
