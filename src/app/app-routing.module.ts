import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-user',
    loadChildren: () => import('./perfil-user/perfil-user.module').then( m => m.PerfilUserPageModule)
  },
  {
    path: 'conexoes',
    loadChildren: () => import('./conexoes/conexoes.module').then( m => m.ConexoesPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'conexoes',
    loadChildren: () => import('./conexoes/conexoes.module').then( m => m.ConexoesPageModule)
  },
  {
    path: 'conexoes',
    loadChildren: () => import('./conexoes/conexoes.module').then( m => m.ConexoesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
