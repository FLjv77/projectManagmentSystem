import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'createProject',
    loadChildren: async () => await import('./module/create-project-process/create-project-process.module').then((m) => m.CreateProjectProcessModule)
  },
  {
    path: 'auth',
    loadChildren: async () => await import('./module/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: async () => await import('./module/dashboard/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
