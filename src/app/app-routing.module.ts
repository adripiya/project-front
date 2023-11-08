import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { PromotoresComponent } from './components/promotores/promotores.component';
import { UsersComponent } from './components/users/users.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, pathMatch: 'full',
 },
  { path: 'detail/:id', component: DetailComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'events', component: EventsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'promotores', component: PromotoresComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'facturas', component: FacturasComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuard] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
