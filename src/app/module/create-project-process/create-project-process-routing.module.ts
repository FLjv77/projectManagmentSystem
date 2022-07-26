import { SelectProjectTypeComponent } from 'src/app/createProjectProcess/page/select-project-type/select-project-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreationLevelsComponent } from 'src/app/createProjectProcess/page/project-creation-levels/project-creation-levels.component';
import {SpecializedInformationRuralWaterComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/specialized-information-rural-water.component";
import {SpecializedInformationRemovalMarginalizationComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-removal-marginalization/specialized-information-removal-marginalization.component";
import {SpecializedInformationRuralWayComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-way/specialized-information-rural-way.component";
import {SpecializedInformationRuralHousingComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-housing/specialized-information-rural-housing.component";
import { MapContainerComponent } from 'src/app/createProjectProcess/page/project-creation-levels/page/pproject-location-information/map-container/map-container.component';

const routes: Routes = [
  {
    path: 'selectProjectType', component: SelectProjectTypeComponent
  },
  {
    path: 'startCreatProject', component: ProjectCreationLevelsComponent
  },
  {
    path: 'specializedInformationRuralWater', component: SpecializedInformationRuralWaterComponent
  },
  {
    path: 'specializedInformationRemovalMarginalization', component: SpecializedInformationRemovalMarginalizationComponent
  },
  {
    path: 'specializedInformationRuralWay', component: SpecializedInformationRuralWayComponent
  },
  {
    path: 'specializedInformationRuralHousing', component: SpecializedInformationRuralHousingComponent
  },
  {
    path: 'selectLocationOnMap', component: MapContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProjectProcessRoutingModule { }
