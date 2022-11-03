export interface RedInfraestructuradaDetail {
  id?: number,
  Ipasignado?: string,
  PuertadeSalida?: string,
  Mascara?: string,
  Dns?: string,
  InfraestructuraId?: number,
  RedId?: number,
  infraestructura?: {
    id?: number,
    MAC?: string,
    FuncionId?: number,
    funcion?: {
      id?: number,
      Nombre?: string
    }
  },
  red?: {
    id?: number,
    IpRed?: string,
    Mascara?: string
  }
}
