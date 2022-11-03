export interface Alerta {
  id?: number,
  Mensaje?: string,
  Estado?: string,
  PuntodeControlId?: number,
  EstandarId?: number,
  puntodecontrol?: {
    id?: number,
    IpAsignado?: string,
    Mascara?: string,
    MAC?: string,
    Estado?: string,
    RedId?: string,
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
  },
  estandar?: {
    id?: number,
    Contaminante?: string,
    ValorAlerta?: string,
    ValorPeligro?: string,
    TipoId?: number,
    tipo?: {
      id?: number,
      Nombre?: string,
    }
  }
}
