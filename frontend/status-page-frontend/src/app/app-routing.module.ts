import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { StatusDashboardComponent } from './features/status/pages/status-dashboard/status-dashboard.component';
import { PublicStatusPageComponent } from './features/status/pages/public-status-page/public-status-page.component';
import { IncidentDashboardComponent } from './features/incidents/pages/incident-dashboard/incident-dashboard.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: StatusDashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'incidents', 
    component: IncidentDashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { path: 'status', component: PublicStatusPageComponent },
  { path: '', redirectTo: '/status', pathMatch: 'full' },
  { path: '**', redirectTo: '/status' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }