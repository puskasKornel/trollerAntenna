import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StaticAPageComponent } from './pages/static-apage/static-apage.component';
import { StaticBPageComponent } from './pages/static-bpage/static-bpage.component';
import { StaticCPageComponent } from './pages/static-cpage/static-cpage.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'statica', component: StaticAPageComponent, canActivate: [AuthGuard] },
  { path: 'staticb', component: StaticBPageComponent, canActivate: [AuthGuard] },
  { path: 'staticc', component: StaticCPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  // onSameUrlNavigation: 'reload' only re-triggers the NavigationEnd event on the same route
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
