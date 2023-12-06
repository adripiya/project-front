import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { PromotoresComponent } from './components/promotores/promotores.component';
import { UsersComponent } from './components/users/users.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { MatTableModule } from '@angular/material/table';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CreateEventsComponent } from './shared/dialogs/create-events/create-events.component';
import { DetailEventsComponent } from './shared/dialogs/detail-events/detail-events.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RestaurantePromotorComponent } from './components/restaurante-promotor/restaurante-promotor.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { CreatePromotorComponent } from './shared/dialogs/create-promotor/create-promotor.component';
import { DetailPromotorComponent } from './shared/dialogs/detail-promotor/detail-promotor.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DetailRestauranteComponent } from './shared/dialogs/detail-restaurante/detail-restaurante.component';
import { CreateRestauranteComponent } from './shared/dialogs/create-restaurante/create-restaurante.component';
import { CreateRestaurantePromotorComponent } from './shared/dialogs/create-restaurante-promotor/create-restaurante-promotor.component';
import { DetailRestaurantePromotorComponent } from './shared/dialogs/detail-restaurante-promotor/detail-restaurante-promotor.component';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { DetailReservaComponent } from './shared/dialogs/detail-reserva/detail-reserva.component';
import { CreateReservaComponent } from './shared/dialogs/create-reserva/create-reserva.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CreateUsuarioComponent } from './shared/dialogs/create-usuario/create-usuario.component';
import { DetailUsuarioComponent } from './shared/dialogs/detail-usuario/detail-usuario.component';
import { AuthInterceptorService } from './auth-interceptorService';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailComponent,
    MapComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    EventsComponent,
    PromotoresComponent,
    UsersComponent,
    FacturasComponent,
    ClientesComponent,
    RestaurantesComponent,
    CreateEventsComponent,
    DetailEventsComponent,
    ReservasComponent,
    RestaurantePromotorComponent,
    CreatePromotorComponent,
    DetailPromotorComponent,
    DetailRestauranteComponent,
    CreateRestauranteComponent,
    CreateRestaurantePromotorComponent,
    DetailRestaurantePromotorComponent,
    DetailReservaComponent,
    CreateReservaComponent,
    CreateUsuarioComponent,
    DetailUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, 
  {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
