import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ResultadoProbabilidadImpacto } from 'src/app/utils/constantes';


@Pipe({
  name: 'dinamico',
})
export class DinamicoPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(valor: any, nombre_pipe: string) {

    switch (nombre_pipe) {
      case 'decimal_miles':
        return this.decimal_miles(valor);
      case 'texto_maximo':
        return this.texto_maximo(valor);
      case 'canal':
        return this.canal(valor);
      case 'icono':
        return this.icono(valor);
      case 'explain_operacion':
        return this.explain_operacion(valor);
      case 'si_no':
        return this.si_no(valor);
      case 'sanitizeHtml':
        return this.domSanitizer.bypassSecurityTrustHtml(valor);
      case 'colores':
        return this.colores(valor);
      case 'vigencias':
        return this.vigencias(valor);
      case 'tipo_material':
        return this.tipoMaterial(valor);
      case 'tipo_archivo':
        return this.tipoArchivo(valor);
      case 'name_url_file':
        return this.nameUrlFile(valor);
      case 'listar_revisiones':
        return this.listarRevisiones(valor);
      case 'tipo_actividad':
        return this.tipoActividad(valor);
      case 'tipo_recursos':
        return this.tipoRecursos(valor);
      case 'identificador_recursos':
        return this.identificadorRecursos(valor);
      case 'date':
        return this.convertFecha(valor);
      case 'text':
        return this.convertTexto(valor);
      case 'estado_actividad':
        return this.estadoActividad(valor);
      case 'cantidad_riesgos':
        return this.cantidad_riesgos(valor);
      case 'color_riesgo_inicial':
          return this.colorRiesgoInicial(valor);
      case 'color_riesgo_residual':
            return this.colorRiesgoResidual(valor);
      case 'circular_progressbar':
            return this.circularProgressbar(valor);
      case 'bar_graphic':
            return valor;
          return this.colorRiesgoResidual(valor);
      case 'estado_iper':
          return this.estadoIper(valor);
      case 'responsable_grupo':
          return this.responsableGrupo(valor);
      case 'control_especifico':
          return this.controlEspecifico(valor);
      case 'hipervinculo_pdf':
          return this.hipervinculo(valor);
      case 'hipervinculo_img':
            return this.hipervinculoimg(valor);
      case 'contexto_version_vigente':
          return this.contextoversionvigente(valor);
      case 'alcance_version_vigente':
            return this.contextoestadovigentealcance(valor);
      case 'contexto_estado':
          return this.contextoestadovigente(valor);
      case 'potencial_perdida':
          return this.lvPotencialPerdidad(valor);
      case 'lv_version':
          return this.lvversion(valor);
      case 'lv_version_padre':
          return this.lvversionpadre(valor);
      case 'evaluacion_nivel':
          return this.tipoNivel(valor);
      case 'evaluacion_texto':
          return this.tipoEvaluacionTexto(valor);
      case 'calendar':
        return this.calendarPipe(valor);
      case 'responsable_programa':
        return this.responsablePrograma(valor);
        case 'tipo_tarea':
          return this.tipoTarea(valor);
      case 'array_to_string':
        return this.arrayToString(valor);
      default:
        return valor;
    }
  }

  private colores(value) {
    switch (value) {
      case 'BAJO':
        return this.domSanitizer.bypassSecurityTrustHtml(
          `<span style="color:green;">${value}</span>`
        );
      case 'MEDIO':
        return this.domSanitizer.bypassSecurityTrustHtml(
          `<span style="color:orange;">${value}</span>`
        );
      case 'ALTO':
        return this.domSanitizer.bypassSecurityTrustHtml(
          `<span style="color:red;">${value}</span>`
        );
      default:
        value;
    }
    return value;
  }

  private decimal_miles(valor: number): string {
    return valor.toLocaleString('es-pe');
  }
  private texto_maximo(valor: string): string {
    return valor.trim().substring(0, 250) + ' ...';
  }
  private canal(valor: string): any {
    if (valor == 'R') {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="txt-color-red"><strong>${valor}</strong></span>`
      );
    } else if (valor == 'V') {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="txt-color-green"><strong>${valor}</strong></span>`
      );
    } else if (valor == 'A') {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="txt-color-orangeDark"><strong>${valor}</strong></span>`
      );
    } else if (valor == 'B') {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="txt-color-blue"><strong>${valor}</strong></span>`
      );
    } else {
      return valor;
    }
  }

  private icono(valor: string): any {
    return this.domSanitizer.bypassSecurityTrustHtml(
      `<i class="${valor} fa14"></i>`
    );
  }
  private explain_operacion(valor: string): any {
    valor = valor.trim();
    if (valor.length == 0) {
      return '';
    }
    if (valor == 'TABLE ACCESS FULL') {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="text-danger"><strong>${valor}</strong></span>`
      );
    } else {
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="text-info">${valor}</span>`
      );
    }
  }
  private si_no(valor): any {

    if (['Si', 'SI', true, 1].includes(valor)) {
      return this.domSanitizer.bypassSecurityTrustHtml(
        ` <span class="text-bg-si">SI</span>`
      );
    }
    return this.domSanitizer.bypassSecurityTrustHtml(
      ` <span class="text-bg-no">NO</span>`
    );
  }

  private vigencias(valor): any {
    if (valor) {
      if ([1, '1'].includes(valor)) {
        return this.domSanitizer.bypassSecurityTrustHtml(
          ` <span>Vigente</span>`
        );
      }
      if ([2, '2'].includes(valor)) {
        return this.domSanitizer.bypassSecurityTrustHtml(
          ` <span>Derogado</span>`
        );
      }
      return this.domSanitizer.bypassSecurityTrustHtml(
        ` <span>Suspendido</span>`
      );
    }

  }

  private tipoMaterial(valor): any {
    if ([true, 'true'].includes(valor)) {
      return this.domSanitizer.bypassSecurityTrustHtml(
        ` <span>Peligroso</span>`
      );
    }
    if ([false, 'false'].includes(valor)) {
      return this.domSanitizer.bypassSecurityTrustHtml(
        ` <span>No Peligroso</span>`
      );
    }
    return this.domSanitizer.bypassSecurityTrustHtml(
      ` <span> - </span>`
    );
  }

  private tipoArchivo(valor): any {
    let new_valor = valor;

    if (valor) {
      try {
        let data: any = JSON.parse(valor)
        switch (data.type) {
          case 'application/pdf':
            new_valor = ` <em class='fa-xl fa-file-pdf fa-solid'></em>`
            break;

          default:
            new_valor = ` <span>Imagen</span>`
            break;
        }

      } catch {

      }
    }

    return new_valor;
  }

  private nameUrlFile(valor): any {
    if (valor) {
      let arr = valor.split("/")
      if (arr.length>0) {
        return arr[arr.length-1]
      }
    }
    return ''
  }


  private tipoActividad(valor): any {
    let new_valor = '';

    switch (valor) {
      case 'En revisión':
        new_valor = `<span class="actividad-container en-revision">${valor}</span>`
        break;
      case 'Aprobada':
        new_valor = `<span class="actividad-container aprobada">${valor}</span>`
        break;
      case 'Observada':
        new_valor = `<span class="actividad-container observada">${valor}</span>`
        break;
      case 'En elaboración':
        new_valor = `<span class="actividad-container en-elaboracion">${valor}</span>`
        break;

      default:
        new_valor = ` <span></span>`
        break;
    }

    return new_valor;
  }

  private tipoTarea(valor): any {
    let new_valor = '';

    switch (valor) {
      case 'RUT':
        new_valor = `Rutinaria`
        break;
      case 'NRU':
        new_valor = `No Rutinaria`
        break;
      case 'EME':
        new_valor = `Emergencia`
        break;
    }

    return new_valor;
  }

  private listarRevisiones(valor): any {
    let codigo;
    if (!valor) {return ''}
    let lista = ''
    if (valor.length>0) {
      valor.forEach(el => {
        lista += `<li >` + this.convertFecha(el.fecha) +`   <i class="fa-solid fa-circle-info"></i></li>`
      });
    }
    codigo=`<ul>`+lista+`</ul>`;
    return this.domSanitizer.bypassSecurityTrustHtml(`${codigo}`);

  }



  private tipoRecursos(valor): any {
    let new_valor:string = '';
    switch (valor.tipo_recurso) {
      case 'Tipo de Vehículo':
        new_valor = `${valor.rec_vehiculo_nombre}`
        break;
      case 'Tipo de Equipo Movil':
        new_valor = `${valor.rec_equip_movil_nombre}`
        break;
      case 'Tipo de Equipo Menor':
        new_valor = `${valor.rec_equip_menor_nombre}`
        break;
      case 'Tipo de Accesorio de Levante':
        new_valor = `${valor.rec_equip_lev_nombre}`
        break;
      case 'Tipo de Herramienta Manual':
        new_valor = `${valor.rec_herramientas_nombre}`
        break;
      case 'Tipo de Equipamiento de Emergencia':
        new_valor = `${valor.rec_equip_emer_nombre}`
        break;
      case 'Tipo de Elemento para Trabajos Altura':
        new_valor = `${valor.rec_elem_tralt_nombre}`
        break;
      case 'Tipo de Instalación':
        new_valor = `${valor.rec_instalacion_nombre}`
          break;
      default:
        new_valor = ``
        break;
    }
    return new_valor
  }

  private identificadorRecursos(valor): any {
    let new_valor:string = '';
    switch (valor.tipo_recurso) {
      case 'Tipo de Vehículo':
        new_valor = `${valor.rec_vehiculo_ident}`
        break;
      case 'Tipo de Equipo Movil':
        new_valor = `${valor.rec_equip_movil_ident}`
        break;
      case 'Tipo de Equipo Menor':
        new_valor = `${valor.rec_equip_menor_ident}`
        break;
      case 'Tipo de Accesorio de Levante':
        new_valor = `${valor.rec_equip_lev_ident}`
        break;
      case 'Tipo de Herramienta Manual':
        new_valor = `${valor.rec_herramientas_ident}`
        break;
      case 'Tipo de Equipamiento de Emergencia':
        new_valor = `${valor.rec_equip_emer_ident}`
        break;
      case 'Tipo de Elemento para Trabajos Altura':
        new_valor = `${valor.rec_elem_tralt_ident}`
        break;
      case 'Tipo de Instalación':
        new_valor = `${valor.rec_instalacion_ident}`
          break;
      default:
        new_valor = ``
        break;
    }
    return new_valor
  }
  private convertFecha(fecha:string){
    //20230331
    let new_date=fecha;
    if(new_date){
      new_date=fecha.split('-')[2]+'/'+fecha.split('-')[1]+'/'+fecha.split('-')[0];

    }
    return new_date;
  }

  private convertTexto(texto:string){
    if (!texto) {return ''}
    if(typeof(texto)=='string'){
      let primeraLetra = texto.charAt(0).toUpperCase();
      let restoTexto = texto.slice(1).toLowerCase();
      let resultado = primeraLetra + restoTexto;
      return resultado;
    }
    return ''

  }
  private estadoActividad(item){
    return this.colorActividades(this.estadoActividadIper(item.estado).actividad,item);
  }
  private estadoIper(item){
    return this.colorActividades(this.estadoActividadIper(item.estado).iper,item);
  }
  private estadoActividadIper(texto:string):{actividad:string,iper:string}{
    if(texto){
      let new_estado={
        actividad:'',iper:''
      };
      switch (texto) {
        case '1':
          new_estado.iper = 'En elaboración';
          new_estado.actividad=' ';
          break;
        case '2':
          new_estado.iper = 'En elaboración (ST)';
          new_estado.actividad='En revisión';
          break;
        case '3':
          new_estado.iper = 'En elaboración (SO)';
          new_estado.actividad='En revisión';
          break;
        case '4':
          new_estado.iper = 'En revisión (Lider del área)';
          new_estado.actividad='En revisión';
          break;
        case '5':
          new_estado.iper = 'En revisión (Gerente del área)';
          new_estado.actividad='Aprobado';
          break;
        case '6':
          new_estado.iper = 'En revisión (Gerente de Safety)';
          new_estado.actividad='Aprobado';
          break;
          case '7':
          new_estado.iper = 'Aprobado';
          new_estado.actividad='Aprobado';
          break;
        default:
          new_estado.iper = '';
          new_estado.actividad = ''
          break;
      }
      // return this.colorActividades(new_estado.actividad);
      return new_estado;
    }
    return {
      actividad:'',iper:''
    };

  }


  private cantidad_riesgos(value) {
    if (!value) { return ''}
    return this.domSanitizer.bypassSecurityTrustHtml(
      `<span class="badge rounded-pill me-4" style="background:#CBFDF8;max-width: inherit;color: #0091C6">${value.length} Riesgo(s)</span> <span class="rounded-pill badge" style="background:#FFE3D9; color: #FF4255; max-width: inherit;">${value.length} Riesgo(s) Material(es)</span>`
    );
  }

  private colorRiesgoInicial(valor) {
    let color = this.colorEscalaRiesgo(valor.evini_probabilidad_nombre,valor.evini_gravedad_nombre)
    if(color){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="riesgo" style="background:${color}; font-size: 10px; color:${color=='#fc1e1b'?'white':'black'}">${valor.evini_nivel_riesgo_inicial_nombre} (${valor.evini_nivel_riesgo_inicial}) ${color=='#fc1e1b'?'<i class="fa-solid fa-triangle-exclamation"></i>':''}</div>`
      );

    }
    return ''
  }

  private colorRiesgoResidual(valor) {
    let color = this.colorEscalaRiesgo(valor.evfin_probabilidad_nombre,valor.evfin_gravedad_nombre)
    if(color){

      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="riesgo" style="background:${color}; font-size: 10px; color:${color=='#fc1e1b'?'white':'black'}">${valor.evfin_nivel_riesgo_residual_nombre} (${valor.evfin_nivel_riesgo_residual}) ${color=='#fc1e1b'?'<i class="fa-solid fa-triangle-exclamation"></i>':''}</div>`
      );
    }
    return ''
  }

  private colorEscalaRiesgo(probabilidad_nombre: string, gravedad_impacto_nombre:string): string {
    let resultadoProbabilidadImpacto = new ResultadoProbabilidadImpacto();
    if (probabilidad_nombre && gravedad_impacto_nombre) {
      return resultadoProbabilidadImpacto[probabilidad_nombre][gravedad_impacto_nombre].color
    }
    return  '';
  }

  private circularProgressbar(valor){
    return valor+'%';
  }
  private colorActividades(valor,item) {
    if(valor){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="actividades" style="background:#fef3d1; font-size: 9px; color:${valor=='Aprobado'?'green':'#f99b1c'}; font-weight: bold;">${valor} ${valor=='Aprobado'?'<i class="fa-regular fa-circle-check" style="color:green"></i>':''}  <i style="display: ${item.comentario_obs?'':'none'}" class="fa-solid fa-circle-info" title="${item.comentario_obs}"></i> </div>`
      );

    }
    return ''
  }

  private lvPotencialPerdidad(valor) {
    if(valor){
      let color,background;
      switch(valor){
        case 'Bajo':
          background='#91ce51';
          color='black'
        break;
        case 'Moderado':
          background='#feff23';
          color='black'
        break;
        case 'Alto':
          background='#f9d969';
          color='black'
        break;
        case 'Muy Alto':
          background='#fc1e1b';
          color='white'
        break;
      }
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="actividades" style="font-weight: bold; background:${background}; font-size: 12px; color:${color};">${valor} ${valor=='Muy Alto'?'<i class="fa-solid fa-triangle-exclamation"></i>':''}</div>`
      );

    }
    return ''
  }

  private lvversion(valor) {
    if(valor>-1){

      let color,background,valor1;
      if(valor==1){
        background='#FFF409';
        color='black';
        valor1='Pendiente';
      }else{
        background='#fc1e1b';
        color='white';
        valor1='Historico';
      }

      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="actividades" style="font-weight: bold; background:${background}; font-size: 12px; color:${color};">${valor1}</div>`
      );

    }
    return ''
  }

  private lvversionpadre(valor) {
    if(valor){
      let color,background;
      switch(valor){
        case 1:
          background='#91ce51';
          color='black'
          valor='Vigente'
        break;
      }
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="actividades" style="font-weight: bold; background:${background}; font-size: 12px; color:${color};">${valor}</div>`
      );

    }
    return ''
  }

  private contextoversionvigente(valor) {
    if(valor){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="contexto_version" style="background:#F99B1C; font-size: 14px; color:white;">versión ${valor}</div>`
      );

    }
    return ''
  }

  private contextoestadovigente(valor) {
    if(valor=="Vigente"){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="contexto_version" style="background:#4EC120; font-size: 14px; color:white;padding: 3px;display: block;width: 125px;">${valor}</span>`
      );

    }else{
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="contexto_version" style="background:#FF4255; font-size: 14px; color:white;padding: 3px;display: block;width: 125px;">${valor}</span>`
      );
    }
    return ''
  }

  private contextoestadovigentealcance(valor) {
    if(valor=="Vigente"){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="alcane_version" style="background:#4EC120; font-size: 14px; color:white;padding: 3px;display: block;width: 125px;">${valor}</span>`
      );

    }else{
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<span class="alcane_version" style="background:#FF4255; font-size: 14px; color:white;padding: 3px;display: block;width: 125px;">${valor}</span>`
      );
    }
    return ''
  }



  private responsableGrupo(valor) {
    if(valor){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="grupotrabajo" > <i class="fa-solid fa-user" title='${valor}' style="color:green"></i></div>`
      );

    }
    return ''
  }

  private hipervinculo(valor) {
    if(valor){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="hipervinculo" ><a  href='${valor}' target='_blank'> <i class="fa-solid fa-file-pdf" style="color:green; font-size: 20px"></i></a></div>`
      );

    }
    return ''
  }

  private hipervinculoimg(valor) {
    if(valor){
      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="hipervinculo_img" ><a  href='${valor}' target='_blank'> <i class="fa-solid fa-image" style="color:green; font-size: 20px"></i></a></div>`
      );

    }
    return ''
  }

  calendarPipe(valor) {
    if (!valor) {return '';}
    let html = ''
    let lista = [];
    for(let i=0; i<12; i++) {
      lista.push(
        {
          activo: false,
          fecha_inicio:  null,
          fecha_fin: null,
          mes: null,
        },
      )
    }
    valor.forEach(el => {
      if (el.estado) {
        lista[el.mes -1 ].activo=true;
      }
    });
    for(let it of lista) {
      html += `
      <div class="${it.activo? 'bg-success': ''}" style="width: 10px; height: 20px; margin-right: 2px;" >
      </div>
      `
    }
    return this.domSanitizer.bypassSecurityTrustHtml(`<div style="display:flex;">${html}</div>`)
  }

  private responsablePrograma(valor) {
    if (!valor) {return ''}
    if (typeof(valor)=="number"){
      switch (valor) {
        case 2:
          return "Responsable SO";
        case 3:
          return "Responsable ST";
        case 4:
          return "Responsable AS";
        default:
          return "-";
      }
    }
    let html = ''
    valor.forEach(el => {
      html += `<li>${el}</li>`
    });
    return "<ul>" + html +"</ul>"
  }

  private arrayToString(valor) {
    if (!valor) {return ''}
    return valor.join("\n")
  }

  private controlEspecifico(valor) {
    let capacitacion=valor.capacitacion_nombre;
    let documentos=valor.documentos_nombre;
    let epps=valor.epps_nombre;
    let epcs=valor.epcs_nombre;
    if(valor){

      return this.domSanitizer.bypassSecurityTrustHtml(
        `<div class="riesgo"><i class="fa-solid fa-user" title='${capacitacion}' style="color:green"></i> <i class="fa-solid fa-file" title='${documentos}' style="color:red"></i></div>`
      );
    }
    return ''
  }

  private tipoNivel(valor): any {
    let new_valor = '';

    switch (valor) {
      case 'Bajo':
        new_valor = `<span class="tipo-nivel-container bajo">${valor}</span>`
        break;
      case 'Moderado':
        new_valor = `<span class="tipo-nivel-container moderado">${valor}</span>`
        break;
      case 'Alto':
        new_valor = `<span class="tipo-nivel-container alto">${valor}</span>`
        break;
      case 'Muy Alto':
        new_valor = `<span class="tipo-nivel-container muy-alto">${valor}</span>`
        break;

      default:
        new_valor = ` <span></span>`
        break;
    }

    return new_valor;
  }

  tipoEvaluacionTexto(valor){
    let new_valor = '';

    switch (valor) {
      case 'Bajo':
        new_valor = `<span class="bajo">${valor}</span>`
        break;
      case 'Medio':
        new_valor = `<span class="medio">${valor}</span>`
        break;
      case 'Alto':
        new_valor = `<span class="alto">${valor}</span>`
        break;
      case 'Muy Alto':
        new_valor = `<span class="muy-alto">${valor}</span>`
        break;

      default:
        new_valor = ` <span></span>`
        break;
    }

    return new_valor;
  }

}
