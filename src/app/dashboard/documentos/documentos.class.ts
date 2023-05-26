export class Documentos {
  id_documento?:         number;
  nombre_documento?:     string;
  codigo_documento?:     string;
  fecha_documento?:      Date;
  numero_version?:       number;
  id_version_documento?:       number;
  id_empresa?:           number;
  documento_general?:    string;
  tipo_documento?:       number;
  especialidad?:         number;
  sesion_id?:            number;
  fecha_creacion?:       Date;
  fecha_actualizacion?:  Date;
  estado?:               number = 1;
  eliminado?:            number;
}
