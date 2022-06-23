import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import {MultiSelectCustomToggleComponent} from "../../advancedSearch/page/multi-select-custom-toggle/multi-select-custom-toggle.component";
import {AdvancedSearchAccordingToProgressComponent} from "../../advancedSearch/page/advanced-search-according-to-progress/advanced-search-according-to-progress.component";


@NgModule({
  declarations: [
    MultiSelectCustomToggleComponent,
    AdvancedSearchAccordingToProgressComponent,
  ],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule
  ]
})
export class AdvancedSearchModule { }
