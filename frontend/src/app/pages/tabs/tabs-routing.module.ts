import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/chat/chat.module').then(m => m.ChatPageModule)
          },
          {
            path: 'chat-box',
            loadChildren: () => import('../../pages/chat-box/chat-box.module').then(m => m.ChatBoxPageModule)
          }
        ]
      },
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
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
