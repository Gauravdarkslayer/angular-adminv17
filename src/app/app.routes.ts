import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        data: { header: true },
        loadChildren:()=> import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
        path: 'auth',
        loadChildren:()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path: 'users',
        data: { header: true },
        loadChildren:()=> import('./modules/users/users.module').then(m=>m.UsersModule)
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
