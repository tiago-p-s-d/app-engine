import { Routes } from '@angular/router';
import { DynamicPage } from './pages/dynamic-page/dynamic-page';

export const routes: Routes = [
  { path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.Admin) },

  { path: '', redirectTo: 'admin', pathMatch: 'full' }, 

  { path: ':slug', component: DynamicPage },
  
  { path: '**', redirectTo: 'admin' }
];