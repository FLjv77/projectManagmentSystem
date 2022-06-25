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


@NgModule({
  declarations: [
    MultiSelectCustomToggleComponent,
    AdvancedSearchAccordingToProgressComponent,
    AdvancedSearchAccordingToTimeComponent,
    AdvancedSearchAccordingToAllocationComponent,
    AdvancedSearchAccordingToCostComponent,
    AdvancedSearchAccordingToCompanyComponent,
    AdvancedSearchAccordingToStateComponent,
  ],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule,
    SharedModule
  ]
})
export class AdvancedSearchModule { }
