export class DisplayPathModel {
  path: string;
  hasLink: boolean;
  link: string;

  constructor(path: string, hasLink: boolean, link: string) {
    this.path = path;
    this.hasLink = hasLink;
    if (hasLink) this.link = link;
  }
}
