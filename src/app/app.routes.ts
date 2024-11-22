import { Routes } from '@angular/router';
import RegistroGastosComponent from './pages/Ventas/registro-gastos/registro-gastos.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import ('./shared/components/layout/layout.component'),
   children:[
    {
      path: 'dashboard',
      loadComponent: () => import ('./pages/dashboard/dashboard.component')

    },
    {
      path: 'perfil',
      loadComponent: () => import ('./pages/perfil/perfil.component')
    },
    {
      path:'tablas',
      loadComponent: () => import ('./pages/Ventas/tablas.component')
    },
    {
      path:'tablahisto',
      loadComponent: () => import ('./pages/Ventas/historico/historico.component')
    },
    {
      path:'tablaRegis',
      loadComponent: () => import ('./pages/Ventas/registro-gastos/registro-gastos.component')

    },
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    }
   ]
  },
  {
    path:'login',
    loadComponent: () => import ('./pages/authentication/login/login.component')
  },
  {
   path: '**',
    redirectTo: 'dashboard',

  }

];
