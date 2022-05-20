import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../views/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'devocionais',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/devocionais/devocionais.module').then(m => m.DevocionaisPageModule)
          },
          {
            path: 'criar-devocional',
            loadChildren: () => import('../../views/criar-devocional/criar-devocional.module').then(m => m.CriarDevocionalPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../../views/devocional/devocional.module').then(m => m.DevocionalPageModule)
          }
        ]
      },
      {
        path: 'chat',
        loadChildren: () => import('../../views/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'eventos',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/eventos/eventos.module').then(m => m.EventosPageModule)
          },
          {
            path: 'criar-evento',
            loadChildren: () => import ('../../views/criar-evento/criar-evento.module').then(m => m.CriarEventoPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import ('../../views/evento/evento.module').then(m => m.EventoPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: '/app/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
