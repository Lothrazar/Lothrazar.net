export interface IModPage {
  name: string;
  curseId: number;
  curseSlug: string;
  githubId: string;
  legacy?: boolean;
  hidden?: boolean;
  logo?: string;
  versions: string[];
}
