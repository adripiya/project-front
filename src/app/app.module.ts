import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatTableModule } from '@angular/material/table';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CreateEventsComponent } from './components/shared/dialogs/create-events/create-events.component';
import { DetailEventsComponent } from './components/shared/dialogs/detail-events/detail-events.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    DetailEventsComponent
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
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
