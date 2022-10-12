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
        loadChildren: () => import('../../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('../../pages/evento/evento.module').then(m => m.EventoPageModule)
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