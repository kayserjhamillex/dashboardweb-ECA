export interface UbicacionDetail {
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
