import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchAccordingToProgressComponent } from "../../advancedSearch/page/advanced-search-according-to-progress/advanced-search-according-to-progress.component";
import {AdvancedSearchAccordingToTimeComponent} from "../../advancedSearch/page/advanced-search-according-to-time/advanced-search-according-to-time.component";
import {AdvancedSearchAccordingToAllocationComponent} from "../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component";
import {AdvancedSearchAccordingToCostComponent} from "../../advancedSearch/page/advanced-search-according-to-cost/advanced-search-according-to-cost.component";
import {AdvancedSearchAccordingToCompanyComponent} from "../../advancedSearch/page/advanced-search-according-to-company/advanced-search-according-to-company.component";
import {AdvancedSearchAccordingToStateComponent} from "../../advancedSearch/page/advanced-search-according-to-state/advanced-search-according-to-state.component";

const routes: Routes = [
  {
    path: 'advancedSearchAccordingToProgress', component: AdvancedSearchAccordingToProgressComponent,
  },
  {
    path: 'advancedSearchAccordingToTime', component: AdvancedSearchAccordingToTimeComponent,
  },
  {
    path: 'advancedSearchAccordingToAllocation', component: AdvancedSearchAccordingToAllocationComponent,
  },
  {
    path: 'advancedSearchAccordingToCost', component: AdvancedSearchAccordingToCostComponent,
  },
  {
    path: 'advancedSearchAccordingToCompany', component: AdvancedSearchAccordingToCompanyComponent,
  },
  {
    path: 'advancedSearchAccordingToState', component: AdvancedSearchAccordingToStateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedSearchRoutingModule { }
