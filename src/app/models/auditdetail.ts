export interface AuditDetail {
  id?: number,
  DetalleInteraccion?: string,
  TablasInvolucradas?: string,
  Observaciones?: string,
  UsuarioId?: number,
  usuarios?: {
    id?: number,
    Nombre?: string,
    Apellido?: string,
    Correo?: string,
    Documento?: string,
    Celular?: string,
    Usuario?: string,
    Foto?: string,
    RolId?: number,
    rol?: {
      id?: number,
      Name?: string
    }
  }
}
