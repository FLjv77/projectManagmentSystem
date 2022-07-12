import { MatTooltipModule } from '@angular/material/tooltip';
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
import { MatExpansionModule} from '@angular/material/expansion';
import {FilterProjectStartTimeComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-start-time/filter-project-start-time.component";
import {FilterProjectInfrastructureCostComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-infrastructure-cost/filter-project-infrastructure-cost.component";
import {FilterProjectHumanResourceCostComponent} from "../../advancedSearch/page/filter-side-bar/page/filter-project-human-resource-cost/filter-project-human-resource-cost.component";
import {NgSelect2Module} from "ng-select2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxEchartsModule} from "ngx-echarts";
import { FilterProjectCompanyNameComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-company-name/filter-project-company-name.component';
import { FilterProjectGeographicalLocationComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-geographical-location/filter-project-geographical-location.component';
import { AdvancedSearchContainerComponent } from 'src/app/advancedSearch/page/advanced-search-container/advanced-search-container.component';
import { FilterProjectStateComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-state/filter-project-state.component';
import { FilterProjectEndTimeComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-end-time/filter-project-end-time.component';
import { FilterProjectTypeComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-type/filter-project-type.component';
import { FilterProjectTotalCostComponent } from 'src/app/advancedSearch/page/filter-side-bar/page/filter-project-total-cost/filter-project-total-cost.component';


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
    MatTooltipModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class AdvancedSearchModule { }
