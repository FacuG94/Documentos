export interface EstadoChange{
    index:number,
    value:number,
    data?:any
}

export interface OpcionesEnLista {
    codigo: any,
    nombre: any,
    alias?: string,
    checked?:boolean,
    adaptado?:boolean,
    online?:boolean
  }