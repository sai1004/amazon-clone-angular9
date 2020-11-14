import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
        // canActivate: [AuthGuardService],
    },
    {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
        // canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
        }),
        SharedModule,
    ],
    exports: [RouterModule, SharedModule],
})
export class AppRoutingModule {}
