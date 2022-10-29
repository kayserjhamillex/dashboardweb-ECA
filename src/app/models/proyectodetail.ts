export interface ProyectoDetail {
  id?: number,
  Nombre?: string,
  Descripcion?: string,
  FechaInicio?: string,
  FechaFin?: string,
  Estado?: string,
  EmpresaId?: number,
  UsuarioId?: number,
  empresa?: {
    id?: number,
    NombreComercial?: string,
    RazonSocial?: string,
    RUC?: string,
    Detalles?: string
  },
  usuario?: {
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
