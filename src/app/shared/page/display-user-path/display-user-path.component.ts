import {Component, Input, OnInit} from '@angular/core';
import {DisplayPathModel} from "../../model/displayPathModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-user-path',
  templateUrl: './display-user-path.component.html',
  styleUrls: ['./display-user-path.component.scss']
})
export class DisplayUserPathComponent implements OnInit {

  @Input() path1: DisplayPathModel;
  @Input() path2: DisplayPathModel;
  @Input() path3: DisplayPathModel;
  @Input() showProjectList: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public routToPath1() {
    if (this.path1.hasLink ) this.router.navigate(['../../' + this.path1.link]);
  }
  public routToPath2() {
    if (this.path2.hasLink ) this.router.navigate(['../../' + this.path2.link]);
  }
  public routToPath3() {
    if (this.path3.hasLink ) this.router.navigate(['../../' + this.path3.link]);
  }

  public checkPath1HasLink() {
    let res = false;
    if (this.path1) if (this.path1.hasLink) res = true;

    return res;
  }

  public getPath(path: DisplayPathModel): string {
    if (path) return path.path;
    return '';
  }

  public checkPath2HasLink() {
    let res = false;
    if (this.path2) if (this.path2.hasLink) res = true;

    return res;
  }

  public checkPath3HasLink() {
    let res = false;
    if (this.path3) if (this.path3.hasLink) res = true;

    return res;
  }
}
