import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { AdvancedSearchAccordingToStateComponent } from './../../advancedSearch/page/advanced-search-according-to-state/advanced-search-according-to-state.component';
import { AdvancedSearchAccordingToCompanyComponent } from './../../advancedSearch/page/advanced-search-according-to-company/advanced-search-according-to-company.component';
import { AdvancedSearchAccordingToCostComponent } from './../../advancedSearch/page/advanced-search-according-to-cost/advanced-search-according-to-cost.component';
import { AdvancedSearchAccordingToAllocationComponent } from './../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component';
import { AdvancedSearchAccordingToProgressComponent } from './../../advancedSearch/page/advanced-search-according-to-progress/advanced-search-according-to-progress.component';
import { MultiSelectCustomToggleComponent } from './../../advancedSearch/page/multi-select-custom-toggle/multi-select-custom-toggle.component';
import { SharedModule } from './../shared/shared.module';
import { AdvancedSearchAccordingToTimeComponent } from './../../advancedSearch/page/advanced-search-according-to-time/advanced-search-according-to-time.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule} from "@angular/material/radio";
import { MatSliderModule} from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from "@angular/material/select";
import { FilterSideBarComponent} from "../../advancedSearch/page/filter-side-bar/filter-side-bar.component";
import { AdvancedSearchContainerComponent} from "../../advancedSearch/page/advanced-search-container/advanced-search-container.component";
import { MatExpansionModule} from '@angular/material/expansion';
import {FilterProjectStateComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-state/filter-project-state.component";
import {FilterProjectStartTimeComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-start-time/filter-project-start-time.component";
import {FilterProjectEndTimeComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-end-time/filter-project-end-time.component";
import {FilterProjectCompanyNameComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-company-name/filter-project-company-name.component";
import {FilterProjectInfrastructureCostComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-infrastructure-cost/filter-project-infrastructure-cost.component";
import {FilterProjectTypeComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-type/filter-project-type.component";
import {FilterProjectTotalCostComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-total-cost/filter-project-total-cost.component";
import {FilterProjectHumanResourceCostComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-human-resource-cost/filter-project-human-resource-cost.component";
import {FilterProjectGeographicalLocationComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-geographical-location/filter-project-geographical-location.component";
import {NgSelect2Module} from "ng-select2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [
    MultiSelectCustomToggleComponent,
    AdvancedSearchAccordingToProgressComponent,
    AdvancedSearchAccordingToTimeComponent,
    AdvancedSearchAccordingToAllocationComponent,
    AdvancedSearchAccordingToCostComponent,
    AdvancedSearchAccordingToCompanyComponent,
    AdvancedSearchAccordingToStateComponent,
    FilterSideBarComponent,
    AdvancedSearchContainerComponent,
    FilterProjectStateComponent,
    FilterProjectStartTimeComponent,
    FilterProjectEndTimeComponent,
    FilterProjectCompanyNameComponent,
    FilterProjectInfrastructureCostComponent,
    FilterProjectTypeComponent,
    FilterProjectTotalCostComponent,
    FilterProjectHumanResourceCostComponent,
    FilterProjectGeographicalLocationComponent,
  ],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule,
    SharedModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class AdvancedSearchModule { }
