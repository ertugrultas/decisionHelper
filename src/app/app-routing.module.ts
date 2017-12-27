import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DecisionComponent } from "./decision/decision.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                component: DashboardComponent,
                path: '',
            },
            {
                path: 'item/:id',
                component: DetailComponent
            },
            {
              path: 'decision',
              component: DecisionComponent
            },
            { path: '', loadChildren: './users/users.module#UsersModule' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent, LoginComponent,
    DashboardComponent,DecisionComponent,
    DetailComponent,
];
