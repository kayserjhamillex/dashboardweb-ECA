export interface EstandarDetail {
  id?: number,
  Contaminante?: string,
  ValorAlerta?: string,
  ValorPeligro?: string,
  TipoId?: number,
  tipo?: {
    id?: number,
    Name?: string,
    Description?: string
  }
}
