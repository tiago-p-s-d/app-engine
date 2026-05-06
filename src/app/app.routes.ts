import { Routes } from '@angular/router';
import { DynamicPage } from './pages/dynamic-page/dynamic-page';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: 'admin', component: Admin },
  { path: '', component: DynamicPage },           // Home
  { path: ':slug', component: DynamicPage },      // Captura /cases, /about, etc.
  { path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.Admin) } 
];