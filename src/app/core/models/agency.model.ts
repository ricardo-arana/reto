
export interface AgencyDto {
    agencia: string;
    distrito: string;
    provincia: string;
    departamento: string;
    direccion: string;
    lat: number;
    lon: number;
}


export interface AgencyModel {
    id: number;
    name: string;
    district: string;
    province: string;
    department: string;
    address: string;
    latitude: number;
    longitude: number;
}

export class AgencyAdapter implements AgencyModel {
    name: string;
    district: string;
    province: string;
    department: string;
    address: string;
    latitude: number;
    longitude: number;

    constructor(public id: number, data: AgencyDto) {
        this.name = data.agencia;
        this.district = data.distrito;
        this.province = data.provincia;
        this.department = data.departamento;
        this.address = data.direccion;
        this.latitude = data.lat;
        this.longitude = data.lon;
    }

}