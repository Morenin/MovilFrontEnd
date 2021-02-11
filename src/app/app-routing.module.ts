import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alumno',
    loadChildren: () => import('./Alumno/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./Administrador/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./autenticacion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./autenticacion/registro/registro.module').then( m => m.RegistroPageModule)
  },




  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
