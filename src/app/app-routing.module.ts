import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultOutletComponent } from './outlet/default-outlet/default-outlet.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: DefaultOutletComponent,
    children: [
      { path: '', component: HomeComponent, data: { state: 'home' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
