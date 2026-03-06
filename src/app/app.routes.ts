import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Home variants
      { path: '', loadComponent: () => import('./features/home/home-one/home-one.component').then(m => m.HomeOneComponent) },
      { path: 'home-2', loadComponent: () => import('./features/home/home-two/home-two.component').then(m => m.HomeTwoComponent) },
      { path: 'home-3', loadComponent: () => import('./features/home/home-three/home-three.component').then(m => m.HomeThreeComponent) },
      { path: 'home-4', loadComponent: () => import('./features/home/home-four/home-four.component').then(m => m.HomeFourComponent) },
      // About
      { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
      // Events
      { path: 'events', loadComponent: () => import('./features/events/events-list/events-list.component').then(m => m.EventsListComponent) },
      { path: 'events/left', loadComponent: () => import('./features/events/events-left/events-left.component').then(m => m.EventsLeftComponent) },
      { path: 'events/right', loadComponent: () => import('./features/events/events-right/events-right.component').then(m => m.EventsRightComponent) },
      { path: 'events/single', loadComponent: () => import('./features/events/events-single/events-single.component').then(m => m.EventsSingleComponent) },
      // Service
      { path: 'service', loadComponent: () => import('./features/service/service-list/service-list.component').then(m => m.ServiceListComponent) },
      { path: 'service/left', loadComponent: () => import('./features/service/service-left/service-left.component').then(m => m.ServiceLeftComponent) },
      { path: 'service/right', loadComponent: () => import('./features/service/service-right/service-right.component').then(m => m.ServiceRightComponent) },
      { path: 'service/single', loadComponent: () => import('./features/service/service-single/service-single.component').then(m => m.ServiceSingleComponent) },
      // Blog
      { path: 'blog', loadComponent: () => import('./features/blog/blog-list/blog-list.component').then(m => m.BlogListComponent) },
      { path: 'blog/left', loadComponent: () => import('./features/blog/blog-left/blog-left.component').then(m => m.BlogLeftComponent) },
      { path: 'blog/right', loadComponent: () => import('./features/blog/blog-right/blog-right.component').then(m => m.BlogRightComponent) },
      { path: 'blog/single', loadComponent: () => import('./features/blog/blog-single/blog-single.component').then(m => m.BlogSingleComponent) },
      // Pages
      { path: 'team', loadComponent: () => import('./features/pages/team/team.component').then(m => m.TeamComponent) },
      { path: 'history', loadComponent: () => import('./features/pages/history/history.component').then(m => m.HistoryComponent) },
      { path: 'gallery', loadComponent: () => import('./features/pages/gallery/gallery.component').then(m => m.GalleryComponent) },
      { path: 'faq', loadComponent: () => import('./features/pages/faq/faq.component').then(m => m.FaqComponent) },
      { path: 'contact', loadComponent: () => import('./features/pages/contact/contact.component').then(m => m.ContactComponent) },
    ]
  },
  // 404
  { path: '404', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
