//###############################################################################################################
//#                                              MODULO DATATABLES                                              #
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
//# DESCRIPCION:                                                                                                #
//# MODULO QUE PERMITE IMPLEMENTAR LA FUNCIONALIDAD DE DATATABLES EN CUALQUIER ARREGLO DE OBJETOS.              #
//# EL MISMO GENERA 3 EVENTOS PARA GESTIONAR EL EDIT, DELETE, Y VIEW DESDE EL MODULO PADRE.                     #
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
//# VERSION: 1.0.1                                                                                              #
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
//# AUTOR: MAKOTO KATSUMATA 11/25/2017                                                                          #
//#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
//# CAMBIOS:                                                                                                    #
//# 1.0.1. MAKOTO KATSUMATA 11/26/2017: SE AGREGO TOEXCEL Y TOPDF                                               #
//###############################################################################################################


//##########################
//# INICIO # IMPORTACIONES #

import { Component, OnInit, Input, Output, IterableDiffers, DoCheck, EventEmitter, Renderer2, Inject, TemplateRef } from '@angular/core';
import { ExcelService } from './excel.service';

// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
declare let pdfMake: any;
declare let pdfFonts: any;
// declare var pdfFonts: any;
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { DOCUMENT } from '@angular/common';
import { default as swal } from 'sweetalert2'
import { DynamicScriptLoader } from 'src/app/utils/dynamic-load-script';
import { DataTableOptionsModel } from './DatatableOptions.model';
import { EstadoChange } from 'src/app/utils/utils.interface';



//# INICIO # IMPORTACIONES #
//##########################


//#################################################
//# INICIO # DECLARACION COMPONENTE DE DATATABLES #

@Component({
  selector: 'datatable',
  templateUrl: './datatable.template.html',
  styleUrls: ['./datatable.style.scss']
})

//# FINAL  # DECLARACION COMPONENTE DE DATATABLES #
//#################################################



//#################################
//# INICIO # MODULO DE DATATABLES #

export class DatatableComponent implements OnInit, DoCheck {
  //###################
  //# INICIO # INPUTS #

  //# options: Controla los cambios dentro del INPUT de options. Cuando hay un cambio asigna el valor del offsetView y actualiza los offsets de paginación
  @Input() set options(option: any) {
    this.options_value = new DataTableOptionsModel(option);
    Object.assign(this.options_value, option);
    this.options_value.ConfigureDefault();
    this.offsetView = this.options_value.navigation_offsets[this.options_value.navigation_starting_offset_index];
    this.update_offsets();
  }
  @Input() set pagination_external(paginacion: any) {
    if (this.options_value.pagination_external) {
      this.pagination_external_value = paginacion;
      this.pag_reference_external = [];
      const pgenerada = this.paginate(paginacion.number_records, paginacion.page, paginacion.size, 8);
      this.pag_reference_external = pgenerada.pages.map(i => {
        return i;
      });
      this.page_end = pgenerada.totalPages;
    }
  }

  private paginate(ev: any, pageNum = 1, a = 10, r = 10) {
    let l: number, s: number, n = Math.ceil(ev / a);
    if(pageNum < 1) pageNum = 1;
    if(pageNum>n) pageNum= n;
    if (pageNum > n && n <= r) {
      l = 1; s = n;
    }
    else {
      let e = Math.floor(r / 2);
      a = Math.ceil(r / 2) - 1;
      if(pageNum <= e){
        l = 1; s = r
      } else if(pageNum + a >= n)
        {
          l = n - r + 1; s = n
        } else {
          l = pageNum - e; s = pageNum + a
        }
    }
    let g = (pageNum - 1) * a, i = Math.min(g + a - 1, ev - 1), o = Array.from(Array(s + 1 - l).keys()).map(e => l + e);
    return {
      totalItems: ev, currentPage: pageNum, pageSize: a, totalPages: n, startPage: l, endPage: s, startIndex: g, endIndex: i, pages: o
    }
  }

  //# loading: Referencia a la variable que controla el spinner de carga (se pasa del componente padre por referencia)
  @Input() loading: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de borrar(se pasa del componente padre por referencia)
  @Input() loading_delete: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de ver(se pasa del componente padre por referencia)
  @Input() loading_view: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de word(se pasa del componente padre por referencia)
  @Input() loading_word: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de excel(se pasa del componente padre por referencia)
  @Input() loading_excel: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de editar(se pasa del componente padre por referencia)
  @Input() loading_edit: any;

  //# loading: Referencia a la variable que controla el spinner de carga del botton de editar(se pasa del componente padre por referencia)
  @Input() loading_button_custom1: any;
  @Input() loading_button_custom2: any;

  //# data_array: Arreglo de objetos a utilizar en la tabla. Es enviado por el component padre
  @Input() data_array: any[];

  @Input() set_page_selected: number = 1;

  @Input() full_data_excel: string;

  @Input() full_data_pdf: string;

  @Input() templateContent: TemplateRef<any>;
  @Input() templateContentChild: TemplateRef<any>;
  // @Input() row_marked: string | number = null;

  //# FINAL  # INPUTS #
  //###################

  //####################
  //# INICIO # EVENTOS #
    //# edit: Transmite un evento de tipo Switch al padre cuando se llama la función de editar en un registro de la tabla
    @Output() switch: EventEmitter<any> = new EventEmitter<any>();
  //# delete: Transmite un evento de tipo DELETE al padre cuando se llama la función de borrar en un registro de la tabla
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  //# view: Transmite un evento de tipo WORD al padre cuando se llama la función de ver en un registro de la tabla
  @Output() word: EventEmitter<any> = new EventEmitter<any>();

  //# view: Transmite un evento de tipo EXCEL al padre cuando se llama la función de ver en un registro de la tabla
  @Output() excel: EventEmitter<any> = new EventEmitter<any>();

  //# edit: Transmite un evento de tipo EDIT al padre cuando se llama la función de editar en un registro de la tabla
  @Output() button_custom1: EventEmitter<any> = new EventEmitter<any>();
  @Output() button_custom2: EventEmitter<any> = new EventEmitter<any>();
  //# view: Transmite un evento de tipo VIEW al padre cuando se llama la función de ver en un registro de la tabla
  @Output() view: EventEmitter<any> = new EventEmitter<any>();

  //# edit: Transmite un evento de tipo EDIT al padre cuando se llama la función de editar en un registro de la tabla
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  // evento en los items hijos
  @Output() child_event: EventEmitter<any> = new EventEmitter<any>();

  //# column: Transmite un evento de tipo COLUMNA al padre cuando se llama una columna de tipo evento
  @Output() column: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkbox: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkbox_ambitos: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkbox_all: EventEmitter<any> = new EventEmitter<any>();

  @Output() checkbox_colum: EventEmitter<any> = new EventEmitter<any>();

  @Output() radio_column: EventEmitter<any> = new EventEmitter<any>();

  @Output() combobox: EventEmitter<any> = new EventEmitter<any>();

  @Output() get_page_selected: EventEmitter<number> = new EventEmitter<number>();

  @Output() row_event: EventEmitter<number> = new EventEmitter<number>();

  @Output() get_page_size: EventEmitter<number> = new EventEmitter<number>();

  @Output() page_external_select: EventEmitter<number> = new EventEmitter<number>();



  @Output() play_cron: EventEmitter<any> = new EventEmitter<any>();
  @Output() stop_cron: EventEmitter<any> = new EventEmitter<any>();

  @Output() exportFullPdf: EventEmitter<any> = new EventEmitter<boolean>();
  @Output() exportFullExcel: EventEmitter<any> = new EventEmitter<boolean>();
  @Output() evaluacionEstado: EventEmitter<any> = new EventEmitter<any>();


  //# FINAL  # EVENTOS #
  //####################


  //######################
  //# INICIO # VARIABLES #

  //# options_value: Almacena la referencia al objeto de options pasado por el componente padre
  public options_value: any;

  public pagination_external_value: any;

  public pagination_external_obj: any

  public page_end: number;

  //# order: Almacena la columna que se está ordenando (se cambia cuando el usuario da clic en otra columna para ordenar)
  public order: string;

  //# ascendent: Almacena si la columna se está ordenando de forma ascendente. En caso de ser falsa, la columna se ordena de forma descendiente
  public ascendent: boolean;

  //# requestOffsetRight: Almacena una referencia del límite derecho del sistema de paginación
  public requestOffsetRight: number;

  //# requestOffsetLeft: Almacena una referencia del límite izquierdo del sistema de paginación
  public requestOffsetLeft: number;

  //# offsetView: Almacena el total de registros a mostrar por cada paginación de la tabla
  public offsetView: number;

  //# displaying: Almacena una referencia del total de elementos mostrados (se utiliza para un ngFor en el template, que se encarga de mostrar los registros)
  public displaying: string[];

  //# resultados: Almacena el arreglo de objetos referenciado por el component padre
  public resultados: any[];

  //# static_resultados: Almacena una referencia estática del arreglo de objetos referenciado por el padre
  public static_resultados: any[];

  //# search_word: Almacena la palabra ingresa en el campo de filtro
  public search_word: string;

  //# filtering: Almacena el estado de filtro. Si existe un filtro aplicado, la variable es TRUE
  public filtering: boolean;

  //# pag_reference: Almacena una referencia del total de botones de paginación (se utiliza para un ngFor en el template, que se encarga de mostrar los botones de paginación)
  public pag_reference: string[];

  public pag_reference_external: number[];

  public loaded_wjs: boolean;

  //# differ: Variable de referencia utilizada para detectar cambios en un arreglo (Sólo funciona para variables pasadas por referencia)
  private differ: any;

  public child_index_show: number;

  public index_clicked: number;

  public show_clicked: number;

  private dynamicScriptLoader = new DynamicScriptLoader();

  display_childrens:boolean[]=[]
  //# FINAL  # VARIABLES #
  //######################


  //########################
  //# INICIO # CONSTRUCTOR #
  //private cronService: CronService
  constructor( private _iterableDiffers: IterableDiffers, public excelService: ExcelService, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {
    this.index_clicked = -1;
    this.show_clicked = -1;
    this.offsetView = 0;
    this.order = "";
    this.ascendent = false;
    this.filtering = false;
    this.requestOffsetRight = 0;
    this.requestOffsetLeft = 0;
    this.displaying = [];
    this.search_word = "";
    this.resultados = [];
    this.differ = this._iterableDiffers.find([]).create(null);
    this.pag_reference = [];
    this.excelService = excelService;
    this.loaded_wjs = false;
    this.child_index_show = -1;
  }



  data_tabla(data1, data2) {
    // console.log("data1->", data1);
    // console.log("data2->", data2);


  }
  //# FINAL  # CONSTRUCTOR #
  //########################


  //###################
  //# INICIO # LOGICA #

  //# ngOnInit(): Método que ejecuta la lógica en el ciclo de inicio de Angular
  ngOnInit() {
    if (this.options_value.show_childrens) {
      for (let index = 0; index < this.data_array.length; index++) {
        this.display_childrens.push(false)
      }
    }
  }

  //# AfterViewInit(): Método que ejecuta la lógica en el ciclo posterior al inicio de Angular
  AfterViewInit() {
    this.resultados = this.data_array;
    this.pag_reference = [];
    for (let i = 0; i < this.resultados.length / this.offsetView; i++) {
      this.pag_reference.push(' ');
    }
    this.update_offsets();
    // this.pagination_navigation(this.get_page_selected);
  }

  //# ngDoCheck(): Método que ejecuta la lógica en el ciclo de cambios de Angular. El mismo verifica si el arreglo de datos ha cambiado y actualiza las variables correspondientes en caso de haberlo hecho
  ngDoCheck() {
    let changes = this.differ.diff(this.data_array);
    if (changes) {
      this.search_word = '';
      this.resultados = this.data_array;
      this.update_offsets();
      this.pag_reference = [];
      for (let i = 0; i < this.resultados.length / this.offsetView; i++) {
        this.pag_reference.push(' ');
      }
    }
  }

  //# onChangeSelection(selected): Método que recibe el total de registros a mostrar por paginación, los asigna a la variable correspondiente, y actualiza el arreglo de referencia para el ngFor
  onChangeSelection(selected) {
    this.offsetView = parseInt(selected);
    this.pag_reference = [];
    for (var i = 0; i < this.resultados.length / this.offsetView; i++) {
      this.pag_reference.push(' ');
    }
  }

  checkbox_select_all(value) {
    var check_object = { value: value, elements: [] };
    if (value) {
      for (var i = 0; i < this.resultados.length; i++) {
        for (var j = 0; j < this.data_array.length; j++) {
          if (this.data_array[j] == this.resultados[i]) {
            check_object.elements.push(j);
            this.data_array[j].selected = value;
          }
        }
      }
    } else {
      for (var j = 0; j < this.data_array.length; j++) {
        this.data_array[j].selected = value;
      }
    }
    this.checkbox_all.emit(check_object);

  }

  // checkbox_event(value, event) {
  //   for (var i = 0; i < this.data_array.length; i++) {
  //     if (this.data_array[i] == this.resultados[value.index]) {
  //       if(event.path[15].id === 'tab_roles'){
  //         this.checkbox.emit({ index: i, value: value.value, target: event.target });
  //       }
  //       if(event.path[15].id === 'tab_ambitos'){
  //         this.checkbox_ambitos.emit({ index: i, value: value.value, target: event.target });
  //       }
  //       this.data_array[i].selected = value.value;
  //     }
  //   }
  // }


  checkbox_event(value, event, ht) {
    for (var i = 0; i < this.data_array.length; i++) {
      if (this.data_array[i] == this.resultados[value.index]) {
        this.data_array[i].selected = value.value;
        this.checkbox.emit({ index: i, value: value.value });
      }
    }
  }

  checkbox_colum_event(seleccionado: boolean, indice: number, columna: string): void {
    this.checkbox_colum.emit({ index: indice, value: seleccionado, colum: columna });
  }

  radio_column_event(seleccionado: boolean, indice: number, columna: string): void {
    this.radio_column.emit({ index: indice, value: seleccionado, colum: columna });
  }

  combobox_event(valor: string | number): void {
    this.combobox.emit(valor);
  }

  //# column_event(index): Método que ejecuta el evento de COLUMNA.
  column_event(index, column, event) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    for (var i = 0; i < this.data_array.length; i++) {
      if (this.data_array[i] == this.resultados[index]) {
        this.column.emit({ data: this.data_array[i], column: column, target: event.target });
      }
    }
  }

  notification_error(message: string, codigo: string) {
    swal.fire({
      title: message,
      text: codigo,
      timer: 6000,
      background: "#C79121",
      position: 'bottom-right'
    })
  };

  switch_event(index) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (!(this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1)) {
      for (const i of this.data_array.keys()) {
        if (this.data_array[i] == this.resultados[index]) {
          this.switch.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }
  //# delete_event(index): Método que ejecuta el evento de DELETE.
  delete_event(index) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {

    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.delete.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }

  //# word_event(index): Método que ejecuta el evento de WORD.
  word_event(index) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {
    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          const data = this.data_array[i];
          if ('Stimulsoft' in window) {
            this.word.emit(data);
          } else {
            this.loading_word = true;
            const sc = this.renderer2.createElement('script');
            sc.type = 'text/javascript';
            sc.src = 'assets/js/stimulsoft/stimulsoft.all.js';
            sc.onload = () => {
              this.loaded_wjs = true;
              this.word.emit(data);
            };
            this.renderer2.appendChild(this._document.body, sc);
          };
        };
      };
      this.index_clicked = index;
    };
  }

  canEditRow() {
    return
  }

  /**# excel_event(index): Método que ejecuta el evento de EXCEL.*/
  excel_event(index) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {

    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.excel.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }

  //# view_event(index): Método que ejecuta el evento de VIEW.
  view_event(index) {
    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {

    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.view.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }

  //# edit_event(index): Método que ejecuta el evento de EDIT.
  edit_event(index, canEdit?: boolean) {
    if (canEdit === false) return;

    if (index == this.show_clicked) this.show_clicked = -1;
    this.row_clicked(index, true);
    if (this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {

    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.edit.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;

    }
  }

  event_child(event_name:string, item:any){
    this.child_event.emit({event_name,item})
  }

  //# button_custom1(index): Método que ejecuta el evento para el botón personalizado 1 (button_custom1).
  button_custom1_event(index, sololectura: boolean) {
    if (sololectura || this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1) {
    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.button_custom1.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }

  //# button_custom2(index): Método que ejecuta el evento para el botón personalizado 2 (button_custom2).
  button_custom2_event(index, sololectura: boolean) {
    if (sololectura || this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1 || this.loading_button_custom2) {
    } else {
      for (var i = 0; i < this.data_array.length; i++) {
        if (this.data_array[i] == this.resultados[index]) {
          this.button_custom2.emit(this.data_array[i]);
        }
      }
      this.index_clicked = index;
    }
  }

  //# to_excel Método que exporta los datos del Array a un archivo de excel.
  to_excel() {
    this.excelService.loading = true;
    console.log(this.arrayObjetosConPropiedadesNuevas());

   // return;
    this.excelService.exportAsExcelFile(this.arrayObjetosConPropiedadesNuevas(), this.options_value.title);
  }

  to_excel_full() {
    this.exportFullExcel.emit(true);
    /*this.excelService.loading_full = true;
    this.excelService.exportExcelByte(this.full_data_excel, this.options_value.title);*/
  }

  //# arrayObjetosConPropiedadesNuevas: Método que devuelve un Array de Objeto con las Propiedades del this.options_value.columns_headers;
  private arrayObjetosConPropiedadesNuevas(): any[] {
    let encabezadosNuevos = this.options_value.columns_headers.map(e => e.key);
    //let encabezadosAntiguos = this.options_value.columns;
    return this.data_array.map(e => {
      let objAux = {};
      for (let i = 0; i < encabezadosNuevos.length; i++) {
        objAux[encabezadosNuevos[i]] = e[encabezadosNuevos[i]];
      }
      return objAux;
    });
  }

  to_pdf() {
    let self = this;
    this.dynamicScriptLoader.loadScripts([{ name: 'pdfmake.js', src: 'assets/js/pdfmake.min.js', element: 'script' }
      , { name: 'vfs_fonts.js', src: 'assets/js/vfs_fonts.js', element: 'script' }

    ], () => setTimeout(() => self.to_pdf_after(), 50))

  }

  to_pdf_full(){
    this.exportFullPdf.emit(true);

   /* let byteString = atob(this.full_data_pdf);
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const data: Blob = new Blob([ab], {
      type: 'application/pdf'
    });
    FileSaver.saveAs(data, this.options_value.title + '_export_' + new Date().getTime() + '.pdf');*/

  }

  to_pdf_after() {
    // var logo = get_logo();
    pdfMake.vfs = pdfFonts;
    let pdf = pdfMake;
    let table_array = [];
    let table_element = [];
    let columns_size = [];
    for (let i = 0; i < this.options_value.columns.length; i++) {
      table_element.push({ text: this.options_value.columns_headers[i], style: 'header' });
      columns_size.push('auto');
    }
    table_array.push(table_element);
    for (let j = 0; j < this.resultados.length; j++) {
      table_element = [];
      for (let i = 0; i < this.options_value.columns.length; i++) {
        if (this.resultados[j][this.options_value.columns[i]]) {
          table_element.push({ text: this.resultados[j][this.options_value.columns[i]], style: 'text' });
        } else {
          table_element.push({ text: "", style: 'text' });
        }
      }
      table_array.push(table_element);
    }

    pdf.fonts = {
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      }
    }

    let docDefinition = {
      info: {
        title: this.options_value.title,
        author: 'Módulo de Gestión de Riesgo',
        subject: 'Módulo de Gestión de Riesgo',
        keywords: 'Módulo de Gestión de Riesgo',
        creator: 'Módulo de Gestión de Riesgo',
        producer: 'Módulo de Gestión de Riesgo'
      },
      pageSize: 'LETTER',
      pageOrientation: 'landscape',
      content: [
        // { image: logo, width: 200, margin: [0, 10, 0, 10], alignment: 'left' },
        { text: this.options_value.title, style: 'title', color: '#0000ff', margin: [0, 0, 0, 10] },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              table: {
                headerRows: 1,
                body: table_array
              },
              layout: {
                fillColor: function (i, node) { return (i === 0) ? '#E9E9E9' : null; }
              }
            },
            { width: '*', text: '' },
          ]
        }
      ],
      styles: {
        title: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
        },
        header: {
          fontSize: 12,
          bold: true,
          alignment: 'center',
        },
        text: {
          fontSize: 10,
          alignment: 'left'
        }
      }
    }
    pdfMake.createPdf(docDefinition).download(this.options_value.title + ".pdf");
  }




  //# filter_search(): Método que filtra la tabla en base al STRING ingresado en el campo de búsqueda
  filter_search() {
    this.pagination_navigation(this.nav_min_value());
    let temp_results = [];
    if (this.search_word && this.search_word != null && this.search_word != "") {
      for (let i = 0; i < this.data_array.length; i++) {
        for (let j = 0; j < this.options_value.columns_headers.length; j++) {
          if (this.data_array[i][this.options_value.columns_headers[j].key] && this.data_array[i][this.options_value.columns_headers[j].key].toString().toLowerCase().includes(this.search_word.toLowerCase().trim())) {
            temp_results.push(this.data_array[i]);
            break;
          }
        }
      }
      this.filtering = true;
      this.resultados = temp_results;
      this.update_offsets();
      this.pag_reference = [];
      for (let i = 0; i < this.resultados.length / this.offsetView; i++) {
        this.pag_reference.push(' ');
      }
    } else {
      this.filtering = false;
      this.resultados = this.data_array;
      this.update_offsets();
      this.pag_reference = [];
      for (let i = 0; i < this.resultados.length / this.offsetView; i++) {
        this.pag_reference.push(' ');
      }
    }
  }

  //# update_offsets(): Método que actualiza los offset de referencia de paginación y el arreglo de referencia de paginación
  update_offsets() {
    this.requestOffsetRight = 0;
    this.requestOffsetLeft = 0;
    this.show_clicked = -1;
    if (this.resultados.length > 0) {
      if (this.resultados.length < this.offsetView) {
        this.requestOffsetRight = this.resultados.length;
      } else {
        this.requestOffsetRight = this.offsetView;
      }
      this.requestOffsetLeft = 1;
      this.displaying = [];
      for (let i = this.requestOffsetLeft - 1; i < this.requestOffsetRight; i++) {
        this.displaying.push(" ");
      }
    } else {
      this.displaying = [];
      this.requestOffsetRight = 0;
      this.requestOffsetLeft = 0;
    };
    setTimeout(() => {
      this.pagination_navigation(this.set_page_selected);
    }, 10);
    this.get_page_size.emit(this.offsetView);
  }

  //# updateRequestsGoRight(): Método que actualiza los offset de referencia de paginación y el arreglo de referencia de paginación cuando el usuario da clic en la flecha derecha
  updateRequestsGoRight() {
    if (this.resultados.length > 0) {
      if (this.resultados.length < this.requestOffsetRight + this.offsetView) {
        this.requestOffsetRight = this.resultados.length;
      } else {
        this.requestOffsetRight = this.requestOffsetRight + this.offsetView;

      }
      this.requestOffsetLeft = this.requestOffsetLeft + this.offsetView;
      this.displaying = [];
      for (var i = this.requestOffsetLeft - 1; i < this.requestOffsetRight; i++) {
        this.displaying.push(" ");
      }
    } else {
      this.displaying = [];
    }
  }

  //# updateRequestsGoLeft(): Método que actualiza los offset de referencia de paginación y el arreglo de referencia de paginación cuando el usuario da clic en la flecha izquierda
  updateRequestsGoLeft() {
    if (this.resultados.length > 0) {
      if (this.resultados.length == this.requestOffsetRight) {
        this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
        this.requestOffsetRight = this.requestOffsetLeft + this.offsetView - 1;
      } else {
        this.requestOffsetLeft = this.requestOffsetLeft - this.offsetView;
        this.requestOffsetRight = this.requestOffsetRight - this.offsetView;
      }
      this.displaying = [];
      for (var i = this.requestOffsetLeft - 1; i < this.requestOffsetRight; i++) {
        this.displaying.push(" ");
      }
    } else {
      this.displaying = [];
    }
  }

  sort_periodo_vigencia(index) {
    this.resultados.sort((a, b) => {
      let x = a[this.options_value.columns_headers[index].key];
      let y = b[this.options_value.columns_headers[index].key];
      // if (x.substring(0, 10) === "Indefinido")

      var x_año, x_mes,  x_dia, x_hora, x_minuto, x_segundo, y_año, y_mes, y_dia, y_hora, y_minuto, y_segundo, x_date, y_date
      if (x === null) x_date = new Date(1969,0,1, 0,0,0)
      else {
        isNaN(parseInt(x.substring(6, 10))) ? x_año = 1969 : x_año  = parseInt(x.substring(6, 10));
        isNaN(parseInt(x.substring(3, 5))) ? x_mes = 1 : x_mes  = parseInt(x.substring(3, 5));
        isNaN(parseInt(x.substring(0, 2))) ? x_dia = 1 : x_dia  = parseInt(x.substring(0, 2));

        isNaN(parseInt(x.substring(11, 13))) ? x_hora = 0 : x_hora  = parseInt(x.substring(11, 13));
        isNaN(parseInt(x.substring(14, 16))) ? x_minuto = 0 : x_minuto  = parseInt(x.substring(14, 16));
        isNaN(parseInt(x.substring(17, 19))) ? x_segundo = 0 : x_segundo = parseInt(x.substring(17, 19));

        x_date = new Date(x_año, x_mes-1, x_dia, x_hora, x_minuto, x_segundo);
      }

      if (y === null) y_date = new Date(1969,0,1, 0,0,0)
      else {
        isNaN(parseInt(y.substring(6, 10))) ? y_año = 1969 : y_año  = parseInt(y.substring(6, 10));
        isNaN(parseInt(y.substring(3, 5))) ? y_mes = 1 : y_mes  = parseInt(y.substring(3, 5));
        isNaN(parseInt(y.substring(0, 2))) ? y_dia = 1 : y_dia  = parseInt(y.substring(0, 2));

        isNaN(parseInt(y.substring(11, 13))) ? y_hora = 0 : y_hora  = parseInt(y.substring(11, 13));
        isNaN(parseInt(y.substring(14, 16))) ? y_minuto = 0 : y_minuto  = parseInt(y.substring(14, 16));
        isNaN(parseInt(y.substring(17, 19))) ? y_segundo = 0 : y_segundo = parseInt(y.substring(17, 19));

        y_date = new Date(y_año, y_mes-1, y_dia, y_hora, y_minuto, y_segundo);
      }

      if (!this.ascendent) {
        if (x_date.getTime() < y_date.getTime()) { return 1; }
        if (x_date.getTime() > y_date.getTime()) { return -1; }
      } else if (this.ascendent) {
        if (x_date.getTime() < y_date.getTime()) { return -1; }
        if (x_date.getTime() > y_date.getTime()) { return 1; }
      } else {
        if (x_date.getTime() < y_date.getTime()) { return -1; }
        if (x_date.getTime() > y_date.getTime()) { return 1; }
      }
      return 0;
    });
  }

  sort_number(index) {
    this.resultados.sort((a, b) => {
      var x = a[this.options_value.columns_headers[index].key];
      var y = b[this.options_value.columns_headers[index].key];

      if (!this.ascendent) {
        if (x < y) { return 1; }
        if (x > y) { return -1; }
      } else if (this.ascendent) {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      } else {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      }
      return 0;
    });
  }

  sort_texto(index) {
    this.resultados.sort((a, b) => {
      var x = (a[this.options_value.columns_headers[index].key] ? a[this.options_value.columns_headers[index].key] : '').toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
      var y = (b[this.options_value.columns_headers[index].key] ? b[this.options_value.columns_headers[index].key] : '').toLowerCase().replace("\"", "").replace(".", "").replace("  ", " ").trim();
      if (!this.ascendent) {
        if (x < y) { return 1; }
        if (x > y) { return -1; }
      } else if (this.ascendent) {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      } else {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      }
      return 0;
    });
  }

  sort_date_ddmmyy(index) {
    this.resultados.sort((a, b) => {
      var x = a[this.options_value.columns[index]];
      var y = b[this.options_value.columns[index]];
      if (y.length >= 10) {
        var y_date = new Date(parseInt(y.substring(6, 10)), parseInt(y.substring(3, 5)) - 1, parseInt(y.substring(0, 2)));
      } else {
        var y_date = new Date(3000, 11, 31);
      }
      if (x.length >= 10) {
        var x_date = new Date(parseInt(x.substring(6, 10)), parseInt(x.substring(3, 5)) - 1, parseInt(x.substring(0, 2)));
      } else {
        var x_date = new Date(3000, 11, 31);
      }
      if (!this.ascendent) {
        if (x_date.getTime() < y_date.getTime()) { return 1; }
        if (x_date.getTime() > y_date.getTime()) { return -1; }
      } else if (this.ascendent) {
        if (x_date.getTime() < y_date.getTime()) { return -1; }
        if (x_date.getTime() > y_date.getTime()) { return 1; }
      } else {
        if (x_date.getTime() < y_date.getTime()) { return -1; }
        if (x_date.getTime() > y_date.getTime()) { return 1; }
      }

      return 0;
    });
  }

  //# sort_column(index): Función que recibe el indice de la columna que se está filtrando. El mismo verifica si es ascendente, descendente, y el tipo de dato de la columna a filtrar (con el propósito de aplicar el filtro correspondiente)
  sort_column(index) {
    if (!this.options_value.hide_sort) {
      if (this.order == this.options_value.columns[index] && !this.ascendent) {
        // cambia de acendente a descendente
        this.ascendent = true;
        if (this.options_value.columns_types[index] == "number") {
          this.sort_number(index);
        } else if (this.options_value.columns_types[index] == "text") {
          // texto ad
          if (this.order  === "periodo_vigencia" || this.order  === "periodo") {
            this.sort_periodo_vigencia(index);
          } else {
            this.sort_texto(index);
          }
        } else if (this.options_value.columns_types[index] == "date") {
          this.sort_periodo_vigencia(index);
        } else if (this.options_value.columns_types[index] == "date-DD/MM/YYYY") {
          this.sort_date_ddmmyy(index);
        }
      } else if (this.order == this.options_value.columns[index] && this.ascendent) {
        // cambia de descendente a ascendete
        this.ascendent = false;
        if (this.options_value.columns_types[index] == "number") {
          this.sort_number(index);
        } else if (this.options_value.columns_types[index] == "text") {
          // texto da
          if (this.order  === "periodo_vigencia" || this.order  === "periodo") {
            this.sort_periodo_vigencia(index);
          } else {
            this.sort_texto(index);
          }

        } else if (this.options_value.columns_types[index] == "date") {
          this.sort_periodo_vigencia(index);
        } else if (this.options_value.columns_types[index] == "date-DD/MM/YYYY") {
          this.sort_date_ddmmyy(index);
        }
      } else {
        // de neutro a ascendente
        this.order = this.options_value.columns[index];
        this.ascendent = false;
        if (this.options_value.columns_types[index] == "number") {
          this.sort_number(index);
        } else if (this.options_value.columns_types[index] == "text") {
          // texto na
          if (this.order  === "periodo_vigencia" || this.order  === "periodo") {
            this.sort_periodo_vigencia(index);
          } else {
            this.sort_texto(index);
          }
        } else if (this.options_value.columns_types[index] == "date") {
          this.sort_periodo_vigencia(index);
        } else if (this.options_value.columns_types[index] == "date-DD/MM/YYYY") {
          this.sort_date_ddmmyy(index);
        }
      }
    }
  }

  //# pagination_navigation(value): Método que cambia de paginación cuando el usuario da clic en un botón de paginación
  pagination_navigation(value) {
    this.requestOffsetLeft = (this.offsetView * (value - 1)) + 1;
    if (this.offsetView * value > this.resultados.length) {
      this.requestOffsetRight = this.resultados.length;
    } else {
      this.requestOffsetRight = this.offsetView * value;
    }
    this.displaying = [];
    for (var i = this.requestOffsetLeft - 1; i < this.requestOffsetRight; i++) {
      this.displaying.push(" ");
    }
    this.get_page_selected.emit(+value);
  }
  pagination_navigation_external(value: number): void {
    if (value > 0 && value <= this.page_end) {
      this.page_external_select.emit(value);
    };
  }

  //# nav_current_value(): Método que retorna el valor actual de paginación
  nav_current_value() {

    return Math.ceil(this.requestOffsetRight / this.offsetView);
  }

  //# nav_show(index): Método que retorna la validez de un índice de paginación. En caso de ser inválido, el template no lo muestra
  nav_show(index) {
    if (this.nav_max_value() >= index && (((this.nav_current_value() - 3) <= index && index <= (this.nav_current_value() + 3))) ||
      (this.nav_current_value() <= this.nav_min_value() + 2 && index <= this.nav_min_value() + 6) ||
      (this.nav_current_value() >= this.nav_max_value() - 2 && index >= this.nav_max_value() - 6)) {
      return true;
    } else {
      return false;
    }
  }

  //# nav_min_value(): Retorna el valor mínimo posible de paginación
  nav_min_value() {

    return 1;
  }

  //# nav_max_value(): Retorna el valor máximo posible de paginación
  nav_max_value() {

    return Math.ceil(this.resultados.length / this.offsetView);
  }

  //# limpiar_filtro(): Método que limpiar la caja de Filtro y ejecuta nuevamente el filtro
  limpiar_filtro() {
    this.search_word = '';
    this.filter_search();
  }

  row_clicked(index, do_click) {
    this.child_index_show = -1;
    if (do_click) {
      if (this.show_clicked != index) {
        this.show_clicked = index;
      } else {
        this.show_clicked = -1;
      }
    }
    if (this.options_value.columns_child_active) {
      this.child_index_show = index;
      // this.row_event.emit(index);
    };
    /*if(do_click){
      if(this.resultados[index].row_clicked){
        this.resultados[index].row_clicked = false;
      }else{
        this.resultados[index].row_clicked = true;
      }
    }*/
  }

  prevValue:any = ''
  inputFocus(ev:any, item:any){
    this.prevValue = ev.target.value
  }

  inputBlur(ev:any, item:any){
    ev.target.value = this.prevValue
  }
  inputEnter(ev:any, item:any){
    let value = ev.target.value
    let aux = this.prevValue
    this.prevValue = ev.target.value

    //this.globalService.mensajePreConfirmacion('','actualizar').then(res=>{
      //if(res){
        this.inputChangeEvent.emit({value,item});
      //}else{
        this.prevValue = aux
        ev.target.value = this.prevValue
      //}
    //})

  }

  @Output() changeEstado: EventEmitter<EstadoChange> = new EventEmitter<EstadoChange>();

  onCheckboxChangeEstado(event: any,index:number){
    event.target.checked = !event.target.checked
   // this.globalService.mensajePreConfirmacion('Estado','actualizar').then(res=>{
     // if(res){
        event.target.checked = !event.target.checked
        if (index == this.show_clicked) this.show_clicked = -1;
        this.row_clicked(index, true);
        if (!(this.loading_edit || this.loading_delete || this.loading_view || this.loading_word || this.loading_excel || this.loading_button_custom1)) {
          for (const i of this.data_array.keys()) {
            if (this.data_array[i] == this.resultados[index]) {
              this.changeEstado.emit({index,value:event.target.checked?1:0,data:this.data_array[i]});
            }
          }
          this.index_clicked = index;
        }
    //  }
   // })
  }
  @Output() changeEstadoChild: EventEmitter<any> = new EventEmitter<any>();
  onCheckboxChangeEstadoChild(event: any,item:any){
    event.target.checked = !event.target.checked
   // this.globalService.mensajePreConfirmacion('Estado','actualizar').then(res=>{
    //  if(res){
        event.target.checked = !event.target.checked
        this.changeEstadoChild.emit({child:item});

     // }
   // })
  }

  @Output() dropdownOptionSelected: EventEmitter<any> = new EventEmitter<any>();

  dropdownOption(action:string, item:any){
    this.dropdownOptionSelected.emit({action,item});
  }

  @Output() inputChangeEvent: EventEmitter<any> = new EventEmitter<any>();

  inputChange(ev:any, item:any){
    let value = ev.target.value
    console.log({value,item});

    this.inputChangeEvent.emit({value,item});
  }

  collapseChild(i:number){
    if (this.options_value.open_only_one_child) {
      let itemIndex = this.display_childrens.findIndex(item=>item===true)
      if (itemIndex != -1 && itemIndex != i) {
        this.display_childrens[itemIndex]=false
      }
    }
    this.display_childrens[i] = !this.display_childrens[i]
  }

  //# checkAnyOpenChildren(): Método que verifica si existe alguna tabla hija abierta
  checkOpacity_child_open(): boolean{
    if (this.options_value.opacity_child_open) {
      return this.display_childrens.some(children => children);
    }
    return false
  }

  radioChangeEstado(value: string, indexPadre: number, indexHijo: number, valuePrev: string){
    this.evaluacionEstado.emit({ value, indexPadre,  indexHijo, valuePrev });
  }

  expandOrCollapsebtn(){
    let ev:any = event.srcElement
    ev.classList.toggle("rotate");
  }

  paint(paint_front_row: boolean, paint_last_row: boolean, index: number, array_size: number): string{
    let class_name = '';

    if(paint_front_row && index == 0)
      class_name = 'background-one';
    else if(paint_last_row && array_size - 1 == index)
      class_name = 'background-two';
    else
      class_name = ''

    return class_name;
  }
  //# FINAL  # LOGICA #
  //###################
}
//# FINAL  # MODULO DE DATATABLES #
//#################################
