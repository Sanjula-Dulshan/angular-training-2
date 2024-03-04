import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InBaseComponent } from './in-base/in-base.component';
import { ExBaseComponent } from './ex-base/ex-base.component';

const routes: Routes = [
  { path: '', redirectTo: '/internal', pathMatch: 'full' },

  { path: 'internal', component: InBaseComponent },
  { path: 'external', component: ExBaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
