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
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { RestaurantePromotorComponent } from './components/restaurante-promotor/restaurante-promotor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, pathMatch: 'full',},
  // { path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
  // { path: 'events', component: EventsComponent, pathMatch: 'full' },
  { path: 'restaurantes', component: RestaurantesComponent, pathMatch: 'full' },
  { path: 'promotores', component: PromotoresComponent, pathMatch: 'full' },
  { path: 'restaurante-promotor', component: RestaurantePromotorComponent, pathMatch: 'full' },
  { path: 'reservas', component: ReservasComponent, pathMatch: 'full'},
  { path: 'users', component: UsersComponent, pathMatch: 'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
