import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InBaseComponent } from './in-base/in-base.component';
import { ExBaseComponent } from './ex-base/ex-base.component';

const routes: Routes = [
  { path: '', redirectTo: '/external', pathMatch: 'full' },
  {
    path: 'internal',
    component: InBaseComponent,
    children: [
      {
        path: 'reg',
        loadChildren: () =>
          import('./registration-module/registration-module.module').then(
            (m) => m.RegistrationModule
          ),
      },
    ],
  },
  { path: 'external', component: ExBaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
