import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import { AuthGuard } from '../app/demo/pages/authentication/services/guards/AuthGuard' // Certifique-se de importar o AuthGuard corretamente

const routes: Routes = [
  // Rota padrão redireciona para 'login'
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // Rotas protegidas com AuthGuard
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // Aplica o AuthGuard
    children: [
      {
        path: 'dashboard',
        redirectTo: '/dashboard/default',
        pathMatch: 'full',
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./demo/component/basic-component/color/color.component').then((c) => c.ColorComponent),
      },
      {
        path: 'color',
        loadComponent: () =>
          import('./demo/component/basic-component/typography/typography.component').then((c) => c.TypographyComponent),
      },
      {
        path: 'sample-page',
        loadComponent: () =>
          import('./demo/others/sample-page/sample-page.component').then((c) => c.SamplePageComponent),
      },
      {
        path: 'criar-evento',
        loadComponent: () =>
          import('./theme/shared/components/Eventos/criar-evento/criar-evento.component').then(
            (c) => c.CriarEventoComponent
          ),
      },      
      {
        path: 'galeria',
        loadComponent: () =>
          import('./theme/shared/components/galeria/galeria/galeria.component').then(
            (c) => c.GaleriaComponent
          ),
      },           
      {
        path: 'listarGaleria',
        loadComponent: () =>
          import('./theme/shared/components/galeria/listargaleria/listargaleria.component').then(
            (c) => c.ListargaleriaComponent
          ),
      },
    ],
  },
  // Rotas para login e registro
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./demo/pages/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./demo/pages/authentication/auth-register/auth-register.component').then(
            (c) => c.AuthRegisterComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
