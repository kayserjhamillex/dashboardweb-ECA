export interface SensorDetail {
  id?: number,
  MAC?: string,
  TipoId?: number,
  tipo?: {
    id?: number,
    Nombre?: string,
    Descripcion?: string
  }
}
