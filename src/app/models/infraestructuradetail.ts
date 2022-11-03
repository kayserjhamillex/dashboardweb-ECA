export interface InfraestructuraDetail {
  id?: number,
  MAC?: string,
  FuncionId?: number,
  funcion?: {
    id?: number,
    Name?: string
  }
}
