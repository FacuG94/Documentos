import { environment } from "src/environments/environment";

export enum TipoRecursos {
  VEHICULOS = 'VE',
  EQUIPOS_PESADOS = 'EP',
  EQUIPOS_MENORES = 'EM',
  ACCESORIOS_LEVANTE = 'AL',
  HERRAMIENTAS_MANUALES = 'HM',
  EQUIPAMIENTO_EMERGENCIA = 'EE',
  TRABAJO_ALTURA = 'TA',
  INSTALACIONES = 'IN'
}

export enum TipoEvaluacion {
  ESPECIFICO = 'ESPECIFICO',
  GENERAL = 'GENERAL'
}

export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}

export function url_fichero_directorio(url){
 // url=environment.urlBase.domain+url;
  return url;
}
export class ColoresProbabilidad {
  'Muy Alta' = { nombre: 'Muy Alta', color: '#fc1e1b' };
  Alta = { nombre: 'Alta', color: '#f9d969' };
  Media = { nombre: 'Media', color: '#feff23' };
  Baja = { nombre: 'Baja', color: '#91ce51' };
}

export enum TipoProbabilidad {
  MUY_ALTA = 'Muy Alta',
  ALTA = 'Alta',
  MEDIA = 'Media',
  BAJA = 'Baja'
}

export class ColoresGravedadImpacto {
  3 = { nombre: 'Muy Alta', color: '#fc1e1b' };
  2 = { nombre: 'Alta', color: '#f9d969' };
  1 = { nombre: 'Media', color: '#feff23' };
  0 = { nombre: 'Baja', color: '#91ce51' };
}

export class ResultadoProbabilidadImpacto {
  'Muy Alta' = {
    'Baja': { nombre: 'Moderado', color: '#feff23' },
    'Media': { nombre: 'Alto', color: '#f9d969' },
    'Alta': { nombre: 'Muy Alto', color: '#fc1e1b' },
    'Muy Alta': { nombre: 'Muy Alto', color: '#fc1e1b'}
  }
  Alta = {
    'Baja': { nombre: 'Moderado', color: '#feff23' },
    'Media': { nombre: 'Moderado', color: '#feff23' },
    'Alta': { nombre: 'Alto', color: '#f9d969' },
    'Muy Alta': { nombre: 'Muy Alto', color: '#fc1e1b'}
  }
  Media = {
    'Baja': { nombre: 'Baja', color: '#91ce51' },
    'Media': { nombre: 'Moderado', color: '#feff23' },
    'Alta': { nombre: 'Moderado', color: '#feff23' },
    'Muy Alta': { nombre: 'Alto', color: '#f9d969'}
  }
  Baja = {
    'Baja': { nombre: 'Baja', color: '#91ce51' },
    'Media': { nombre: 'Baja', color: '#91ce51' },
    'Alta': { nombre: 'Moderado', color: '#feff23' },
    'Muy Alta': { nombre: 'Moderado', color: '#feff23'}
  }



}

