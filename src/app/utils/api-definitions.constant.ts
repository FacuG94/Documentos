import { environment } from "src/environments/environment";

const URL_USUARIO = environment.urlBase.user;
const URL_API = environment.urlBase.api;


export namespace API_DEFINITIONS {

  export const URL_LOGIN = `${URL_USUARIO}/login/`;

  export const URL_RESET_PASSWORD = `${URL_USUARIO}/reset-password/`;

  export const URL_USER_AUNOR = `${URL_USUARIO}/user-aunor/`;

  export const URL_RECUPERAR_PASSWORD = `${URL_USUARIO}/email-reset-password/`;

  export const URL_CREAR_USUARIO = `${URL_USUARIO}/create/`;

  export const URL_OBTENER_USUARIO = `${URL_USUARIO}/me/`;

  export const URL_NACIONAL = `${URL_API}/nacionalidad/`;

  export const URL_SUCURSAL = `${URL_API}/sucursal/`;

  export const URL_TIPO_DOCUMENTO = `${URL_API}/tipo_documento/`;

  export const URL_TIPO_DOCUMENTACION = `${URL_API}/tipo_documentacion/`;

  export const URL_ESPECIALIDAD_DOCUMENTACION = `${URL_API}/especialidad_documentacion/`;

  export const URL_PUESTO_TRABAJO = `${URL_API}/puesto_trabajo/`;

  export const URL_TIPO_VEHICULO = `${URL_API}/tipo_vehiculo/`;

  export const URL_TIPO_EQUIPO_MOVIL = `${URL_API}/tipo_equipo_movil/`;

  export const URL_TIPO_EQUIPO_MENOR = `${URL_API}/tipo_equipo_menor/`;

  export const URL_TIPO_EQUIPO_LEVANTE = `${URL_API}/tipo_equipo_levante/`;

  export const URL_TIPO_HERRAMIENTA = `${URL_API}/tipo_herramienta/`;

  export const URL_TIPO_EQUIPAMIENTO_EMERGENCIA = `${URL_API}/tipo_equip_emergencia/`;

  export const URL_TIPO_TRABAJO_ALTURA = `${URL_API}/tipo_et_altura/`;

  export const URL_TIPO_INSTALACION= `${URL_API}/tipo_instalacion/`;

  export const URL_RIESGO = `${URL_API}/riesgo/`;

  export const URL_RIESGO_RIESGOS = `${URL_API}/riesgo/riesgo/`;

  export const URL_RIESGO_DETAIL = `${URL_API}/riesgo/detail/`;

  export const URL_CATEGORIA_RIESGO = `${URL_API}/riesgo_categoria/`;

  export const URL_SUBCATEGORIA_RIESGO = `${URL_API}/riesgo_subcategoria/`;

  export const URL_TAREA = `${URL_API}/tarea/`;

  export const URL_ACTIVIDAD = `${URL_API}/actividad/`;

  export const URL_PROCESO = `${URL_API}/proceso/`;

  export const URL_DANIO = `${URL_API}/riesgo_danio/`;

  export const URL_TIPO_DANIO = `${URL_API}/riesgo_tipo_danio/`;

  export const URL_TIPO_CAUSA = `${URL_API}/riesgo_causa/`;

  export const URL_JERARQUIA = `${URL_API}/riesgo_jerarquia/`;

  export const URL_TIPO_RECURSO = `${URL_API}/riesgo_tipo_recurso/`;

  export const URL_CAUSA = `${URL_API}/riesgo_causa/`;

  export const URL_EFECTO = `${URL_API}/riesgo_efecto/`;

  export const URL_VALIDACION_CC = `${URL_API}/riesgo_validacion_cc/`;

  export const URL_GRAVEDAD = `${URL_API}/riesgo_gravedad/`;

  export const URL_NIVEL_RIESGO = `${URL_API}/riesgo_nivel_riesgo/`;

  export const URL_RIESGO_CONTROLES= `${URL_API}/riesgo_controles/`;

  export const URL_RIESGO_CONTROLES_DETALLE= `${URL_API}/riesgo_controles_detalle/`;

  export const URL_RIESGO_EPPS= `${URL_API}/riesgo_epps/`;

  export const URL_RIESGO_EPCS= `${URL_API}/riesgo_epcs/`;

  export const URL_REQLEGAL_PAIS = `${URL_API}/reqlegal_pais/`;

  export const URL_REQLEGAL_GRUPO   = `${URL_API}/reqlegal_grupo/`;

  export const URL_REQLEGAL_CATEGORIA   = `${URL_API}/reqlegal_categoria/`;

  export const URL_REQLEGAL_TIPO_NORMA   = `${URL_API}/reqlegal_tipo_norma/`;

  export const URL_OTROS_REQUISITOS_TIPO_NORMA   = `${URL_API}/otrosrequisitos_tipo_norma/`;

  export const URL_REQLEGAL_ENTIDAD   = `${URL_API}/reqlegal_entidad/`;

  export const URL_OTROS_REQLEGAL_ENTIDAD   = `${URL_API}/otrosrequisitos_entidad/`;

  export const URL_EMPRESA   = `${URL_API}/empresa/`;

  export const URL_SERVICIO   = `${URL_API}/servicio/`;

  export const URL_TIPO_FORMACION   = `${URL_API}/tipo_formacion/`;

  export const URL_PROBABILIDAD_PE   = `${URL_API}/riesgo_prob_pe/`;

  export const URL_PROBABILIDAD_PT   = `${URL_API}/riesgo_prob_pt/`;

  export const URL_PROBABILIDAD_TE   = `${URL_API}/riesgo_prob_te/`;

  export const URL_PROBABILIDAD_CA   = `${URL_API}/riesgo_prob_ca/`;

  export const URL_PROBABILIDAD_PR   = `${URL_API}/riesgo_prob_pr/`;

  export const URL_REUNIONES   = `${URL_API}/reuniones/`;

  export const URL_TIPO_SERVICIO   = `${URL_API}/tipo_servicio/`;

  export const URL_SIMULACRO   = `${URL_API}/simu_tipo/`;

  export const URL_ACTO_SUBESTANDAR   = `${URL_API}/acto_subestandar/`;

  export const URL_CONDICION_SUBESTANDAR   = `${URL_API}/condicion_subestandar/`;

  export const URL_CLASIFICACION_ALEATICA   = `${URL_API}/acc_clasif_aleatica/`;

  export const URL_CLASIFICACION_PERU   = `${URL_API}/acc_clasif_peru/`;

  export const URL_PARTE_CUERPO   = `${URL_API}/acc_parte_cuerpo/`;

  export const URL_AUDITORIA_TIPO   = `${URL_API}/aud_tipo/`;

  export const URL_AUDITORA_ENTIDAD   = `${URL_API}/aud_entidad/`;

  export const URL_AUDITORIA_MOTIVO   = `${URL_API}/aud_motivo/`;

  export const URL_AGENTE_CATEGORIA   = `${URL_API}/riesgo_categoria_agente/`;

  export const URL_AGENTE_SUBCATEGORIA   = `${URL_API}/riesgo_subcategoria_agente/`;

  export const URL_AGENTE   = `${URL_API}/riesgo_agente/`;

  export const URL_ORGANIGRAMA   = `${URL_API}/estructura/`;

  export const URL_PERSONA   = `${URL_API}/persona/`;

  export const URL_COMPONENTE   = `${URL_API}/componente/`;

  export const URL_RECURSO_VEHICULO = `${URL_API}/recursos_vehiculo/`;

  export const URL_RECURSO_EQUIPO_MOVIL = `${URL_API}/recursos_equipo_movil/`;

  export const URL_RECURSO_EQUIPO_MENOR = `${URL_API}/recursos_equipo_menor/`;

  export const URL_RECURSO_EQUIPO_LEVANTE = `${URL_API}/recursos_equipo_levante/`;

  export const URL_RECURSO_HERRAMIENTA = `${URL_API}/recursos_herramienta/`;

  export const URL_RECURSO_EQUIPO_EMERGENCIA = `${URL_API}/recursos_equip_emergencia/`;

  export const URL_RECURSO_ALTURA = `${URL_API}/recursos_elem_trab_altura/`;

  export const URL_RECURSO_INSTALACIONES = `${URL_API}/recursos_instalaciones/`;

  export const URL_GRUPO_TRABAJO = `${URL_API}/grupo_trabajo/`;

  export const URL_SERVICIO_TRABAJADOR = `${URL_SERVICIO}trabajadores`;

  export const URL_REQ_LEGAL = `${URL_API}/reqlegal/principal/`;

  export const URL_REQ_LEGAL_TITULOS = `${URL_API}/reqlegal/titulos/`;

  export const URL_REQ_LEGAL_ITEM = `${URL_API}/reqlegal/item/`;

  export const URL_REQ_LEGAL_REGISTROS = `${URL_API}/reqlegal/registros/`;

  export const URL_JOIN_SERVICIOS_RECURSOS = `${URL_API}/join_servicios_recursos/`;

  export const URL_INSUMOS = `${URL_API}/insumos/`;

  export const URL_CLASE = `${URL_API}/clase/`;

  export const URL_DIVISION = `${URL_API}/division/`;

  export const URL_GRUPO_LISTA = `${URL_API}/lista_verificacion/grupo_lista/`;

  export const URL_ACREDITACION = `${URL_API}/acreditacion/`;

  export const URL_LISTA_VERIFICACION_INICIAL = `${URL_API}/lista_verificacion/evaluacion_inicial/`;

  export const URL_LISTA_VERIFICACION_GRUPO_ITEM = `${URL_API}/lista_verificacion/grupo_item/`;

  export const URL_LISTA_VERIFICACION_VERSIONES = `${URL_API}/lista_verificacion/versiones/`;

  export const URL_LISTA_VERIFICACION_GRUPO_LISTA = `${URL_API}/lista_verificacion/item/`;

  export const URL_LISTA_VERIFICACION_IMAGEN_REFERENCIAL = `${URL_API}/lista_verificacion/imagen_referencial/`;

  export const URL_TEMA_FORMACION = `${URL_API}/fetc_temas_formacion/`;

  export const URL_ACTIVIDADES = `${URL_API}/actividades/`;

  export const URL_ACTIVIDADES_TAREA = `${URL_API}/actividades_tarea/`;

  export const URL_DOCUMENTOS = `${URL_API}/documentos/`;

  export const URL_ANEXO_DOCUMENTOS = `${URL_API}/anexo_documentos/`;

  export const URL_OTROS_DOCUMENTOS = `${URL_API}/otros_documentos/`;

  export const URL_ANEXO_OTROS_DOCUMENTOS = `${URL_API}/anexos_otros_documentos/`;

  export const URL_CONTEXTO_ESTRATEGIA_FODAS = `${URL_API}/contexto_estrategia/fodas/`;

  export const URL_CONTEXTO_ESTRATEGIA_FODA_ITEMS = `${URL_API}/contexto_estrategia/foda_items/`;

  export const URL_CONTEXTO_ESTRATEGIA_ESTRATEGIA_FODAS = `${URL_API}/contexto_estrategia/estrategia_fodas/`;

  export const URL_CONTEXTO_ALCANCE = `${URL_API}/contexto_alcance/alcances/`;

  export const URL_CONTEXTO_ALCANCE_REVISION = `${URL_API}/contexto_alcance/revision_alcances/`;

  export const URL_COMPROMISO_POLITICA = `${URL_API}/contexto_alcance/compromisos/`;

  export const URL_USER_ACTIVIDADES = `${URL_API}/user_actividades/`;

  export const URL_REVISION_RIESGO = `${URL_API}/revision_riesgo/revision_riesgo/`;

  export const URL_PLAN_ACCION_REVISION_RIESGO = `${URL_API}/revision_riesgo/plan_accion_revision/`;


  export const URL_PLANIFICACION_ESTRATEGICA = `${URL_API}/planificacion_estrategica/planificaciones/`;

  export const URL_PLANIFICACION_ESTRATEGICA_ESTRATEGIA = `${URL_API}/planificacion_estrategica/estrategias/`;

  export const URL_PLANIFICACION_ESTRATEGICA_OBJETIVO = `${URL_API}/planificacion_estrategica/objetivos/`;

  export const URL_PLANIFICACION_ESTRATEGICA_ACTIVIDAD = `${URL_API}/planificacion_estrategica/actividades/`;

  export const URL_PLANIFICACION_OPERATIVA = `${URL_API}/planificacion_operativa/planificaciones/`;

  export const URL_PROGRAMA_FORMACION = `${URL_API}/planificacion_operativa/programa_formacion/`;


}
