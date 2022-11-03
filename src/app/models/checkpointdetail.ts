export interface CheckpointDetail {
  id?: number,
  IpAsignado?: string,
  Mascara?: string,
  MAC?: string,
  Estado?: string,
  RedId?: number,
  UbicacionId?: number,
  red?: {
    id?: number,
    IpRed?: string,
    Mascara?: string
  },
  ubicacion?: {
    id?: number,
    Latitud?: string,
    Longitud?: string,
    Direccion?: string,
    Referencia?: string,
    Detalles?: string,
    ZonaId?: number,
    zona?: {
      id?: number,
      Nombre?: string
    }
  }
}
