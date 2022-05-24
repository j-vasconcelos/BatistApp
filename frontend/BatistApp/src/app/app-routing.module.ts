import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  }
];

/*const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'devocionais',
    loadChildren: () => import('./views/devocionais/devocionais.module').then( m => m.DevocionaisPageModule)
  },
  {
    path: 'devocional',
    loadChildren: () => import('./views/devocional/devocional.module').then( m => m.DevocionalPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./views/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./views/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./views/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
];*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
