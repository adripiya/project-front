export interface Evento {
    id: number;
    status: string;
    fecha: Date;
    precio: number;
    asistentes: number;
    mesas: number;
    catering: boolean;
    camareros?: number;
    tipo: String;
    dj: boolean;
    promotorId: number;
    restauranteId: number;
    clientId: number;
}