import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin',
    renderMode: RenderMode.Prerender 
  },
  {
    path: ':slug',
    renderMode: RenderMode.Server 
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];