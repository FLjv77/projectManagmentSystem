import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { TargetsOfProjectSelectedDto } from 'src/app/createProjectProcess/model/createProjectModel/target';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';

@Component({
  selector: 'app-filter-project-type',
  templateUrl: './filter-project-type.component.html',
  styleUrls: ['./filter-project-type.component.scss']
})
export class FilterProjectTypeComponent implements OnInit {
  @Output() projectType = new EventEmitter<string>;

  public checked: boolean = false;
  public types: TargetsOfProjectSelectedDto[];

  constructor(private createrojectService: CreaterojectService) { }

  ngOnInit(): void {
    this.getTargets();
  }

  public setProjectType(type: string) {
    this.projectType.emit(type);
  }


  private getTargets() {
    this.createrojectService.getTargetsOfProject().subscribe((res: ApiResult<TargetsOfProjectSelectedDto[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.types = res.data;
      }
    });
  }


  public clearFilter() {
    this.projectType.emit(undefined);
    this.checked = false;
  }
}
