import { NgModule, inject } from '@angular/core';
import { CanActivateFn, Router, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { PromotoresComponent } from './components/promotores/promotores.component';
import { UsersComponent } from './components/users/users.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { RestaurantePromotorComponent } from './components/restaurante-promotor/restaurante-promotor.component';
import { AuthGuard } from './auth-guard.guard';

const canActivateContorlRoleUser: CanActivateFn = () => {
  if(sessionStorage.getItem('rol') !== 'admin' ) {
    return inject(Router).navigate(['reservas']);
  }
  return true;
}


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard],},
  // { path: 'calendar', component: CalendarComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard]},
  // { path: 'events', component: EventsComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard] },
  { path: 'restaurantes', component: RestaurantesComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard] },
  { path: 'promotores', component: PromotoresComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard] },
  { path: 'restaurante-promotor', component: RestaurantePromotorComponent, pathMatch: 'full', canActivate: [canActivateContorlRoleUser, AuthGuard] },
  { path: 'reservas', component: ReservasComponent, pathMatch: 'full', canActivate: [ AuthGuard]},
  { path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [ AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
