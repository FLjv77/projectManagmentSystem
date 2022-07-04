import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'createProject',
    loadChildren: () => import('./module/create-project-process/create-project-process.module').then(({CreateProjectProcessModule}) => CreateProjectProcessModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./module/auth/auth.module').then(({AuthModule}) => AuthModule)

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(({DashboardModule}) => DashboardModule)
  },
  {
    path: 'advancedSearch',
    loadChildren: () => import('./module/advanced-search/advanced-search.module').then(({AdvancedSearchModule}) => AdvancedSearchModule)

  },
  {
    path: 'gallery',
    loadChildren: () => import('./module/gallery/gallery.module').then(({GalleryModule}) => GalleryModule)

  },
  {
    path: 'workspace',
    loadChildren: () => import('./module/workspace/workspace.module').then(({WorkspaceModule}) => WorkspaceModule)
  },
  {
    path: 'userManagement',
    loadChildren: () => import('./module/user-management/user-management.module').then(({UserManagementModule}) => UserManagementModule)
  },
  {
    path: 'ManagementReport',
    loadChildren: () => import('./module/management-report/management-report.module').then(({ManagementReportModule}) => ManagementReportModule)
  },
  {
    path: 'projectManagement',
    loadChildren: () => import('./module/project-management/project-management.module').then(({ProjectManagementModule}) => ProjectManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
