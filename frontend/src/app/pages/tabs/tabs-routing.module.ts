import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxPage } from '../chat-box/chat-box.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'devocional',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/devocional/devocional.module').then(m => m.DevocionalPageModule)
          },
          {
            path: 'create-devocional',
            loadChildren: () => import('../../pages/create-devocional/create-devocional.module').then(m => m.CreateDevocionalPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../../pages/view-devocional/view-devocional.module').then(m => m.ViewDevocionalPageModule)
          }
        ]
      },
      /*{
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },*/
      {
        path: 'evento',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/evento/evento.module').then(m => m.EventoPageModule)
          },
          {
            path: 'create-evento',
            loadChildren: () => import('../../pages/create-evento/create-evento.module').then(m => m.CreateEventoPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../../pages/view-evento/view-evento.module').then(m => m.ViewEventoPageModule)
          }
        ]
      }, 
      {
        path: 'menu',
        loadChildren: () => import('../../pages/menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'chat/chat-box',
    component: ChatBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
