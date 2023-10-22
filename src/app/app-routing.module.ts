import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'main', component: MainPageComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent, pathMatch: 'full'},
  {path: 'header', component: HeaderComponent, pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
