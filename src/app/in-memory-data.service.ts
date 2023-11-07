import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Login } from './interfaces/login.model';
import { Evento } from './interfaces/event.model';
import { Promotor } from './interfaces/promotor.model';
import { Restaurante } from './interfaces/restaurante.model';
import { Cliente } from './interfaces/clientes.model';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const date: Date = new Date("2022-03-25");
    const events: Array<Evento> = [
      { id: 1, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 2, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 3, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 4, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 5, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 6, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 7, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 8, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 9, status: 'in_progress', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 },
      { id: 10, status: 'pending', promotorId: 1, restauranteId: 1, fecha: date, precio: 0, asistentes: 0, mesas: 0, catering: false, camareros: 0, tipo: '', dj: false, clientId: 1001 }
    ];

    const promotores: Array<Promotor> = [
      { id: 1, ubicacion: 'A coruña', nombre: 'Pedro Garcia', restaurantes: 2, telefono: 11111111, maxInvitados: 250, minInvitados: 50, catering: false, }
    ]

    const resaturantes: Array<Restaurante> = [
      { id: 1, calle: 'Avenida finisterre', lat: 0.00, lon: 0.00, numero: 1, promotorId: 1, nombre: 'Casa de Julia', descripcion: 'prueba' }
    ]

    const clientes: Array<Cliente> = [
      { id: 1001, nombre: 'Pedro Pica Piedra', telefono: 666666666, dni: '48000000Q', domicilio: 'Calle invetnada nº10 3ºC', correo: 'pppiedra@gmail.com' }
    ]

    const login: Login = {
      status: 200,
      cookie: 10000,
      auth: true,
      user: 'user01',
    }

    return { heroes, login, events, promotores, resaturantes, clientes };
  }
}
