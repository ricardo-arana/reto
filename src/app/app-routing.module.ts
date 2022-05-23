import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agencies',
    loadChildren: () => import('./features/agencies/agencies.module').then( m => m.AgenciesModule)
  },
  { path: '', redirectTo: 'agencies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
