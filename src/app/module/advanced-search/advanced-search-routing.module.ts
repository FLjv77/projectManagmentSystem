import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchAccordingToProgressComponent } from "../../advancedSearch/page/advanced-search-according-to-progress/advanced-search-according-to-progress.component";

const routes: Routes = [
  {
    path: '', component: AdvancedSearchAccordingToProgressComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedSearchRoutingModule { }
