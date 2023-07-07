export class DataTableOptionsModel {
  /**
   *
   */
  constructor(opt: any) {
    this.ConfigurationOptions = opt;
    //console.log('opt.columns_headers_child_name',opt.columns_headers_child_name);
    if (typeof opt.columns_headers_child_name === 'string') {
      this.columns_headers_child_names.push(opt.columns_headers_child_name);
      //console.log('columns_headers_child_name',this.columns_headers_child_name);
    }

  }
  private ConfigurationOptions: any = null;

  show_after_header_table: boolean = true;
  show_widget_footer: boolean = true;
  offsetView: number;
  responsive_y = false;
  columns_headers_title: string[] = [];
  columns_headers_checkbox: boolean = false;
  columns_headers_checkbox_event: boolean[] = [];
  columns_headers_radio: boolean = false;
  columns_headers_radio_event: boolean[] = [];
  combobox_show: boolean = false;
  combobox_show_array = [];
  hide_bar_header: boolean = false;
  columns_context_menu: boolean[] = [];
  id: string = 'table_ref';
  columns_style: string[] = [];
  color_theme: string = 'darken';
  columns_aline: string[] = [];
  columns_child_active: boolean = false;
  columns_style_body: string[] = [];
  show_number_elements: boolean = false;
  show_childrens: boolean = false;
  row_marked = null;
  pagination_external: boolean = false;
  pagination_external_non_style: boolean = false;
  columns_format_decimal: boolean[] = [];
  pipes: string[] = [];
  title_td: string[] = [];
  customClass: string = '';
  width_columns: string | string[] = [];
  color_cabecera: boolean = false;
  wrap_column: boolean[] | string = [];
  mostrar_columns_excel: boolean[] = [];
  mostrar_columns_pdf: boolean[] = [];
  columns: string[] = [];
  navigation_offsets: number = 0;
  navigation_starting_offset_index: number = 0;
  title: string = '';
  //columns_headers: string[] = [];
  columns_headers: ColumHeader[] = []; // este sera un objeto, reeplaza a colums y columns_header (aqui se puede agregar el tipado, estilos,events y otras)
  hide_sort: boolean = false;
  columns_types: string[] = [];
  reserved_check: boolean = false;
  options: ButtonsOptions = new ButtonsOptions();
  options_child: ButtonsOptions = new ButtonsOptions();
  columns_events: any = [];
  options_button_custom: CustomButton = new CustomButton();
  columns_headers_child_name: string = '';// si solo tiene 1 hijo usar este
  columns_headers_child_names: string[] = [];//si va a tener multiples hijos, usar este
  columns_headers_child: string[] = [];
  columns_child: ColumHeader[] = [];//para los hijos
  columns_child_child: ColumHeader[] = []; //columas para los nietos
  reserved_column: string = '';
  reserved_values: {
    value_true: string;
  } = { value_true: '' };
  checkbox_event: any = null;
  disable_checkbox: boolean = false;
  options_header: string = '';
  empty_text: string = '';
  show_toexcel: boolean = false;
  show_toexportar: boolean = false;
  show_topdf: boolean = false;
  show_search_field: boolean = true;
  show_title: boolean = false;
  search_right: boolean = false;
  paint_front_row: boolean = false;
  paint_last_row: boolean = false;
  isModal: boolean = false;
  buttonToggle: boolean = false;
  ocultarCheckboxAll: boolean = false;
  uppercase: any = '';
  title_view: string = '';
  pag_defects: number = 6;

  title_edit: string = '';
  icono_edit: string = 'fa fa-pencil';
  title_puntos: string = '';
  icono_puntos: string = 'fa fa-ellipsis-v';
  title_delete: string = '';
  icono_delete: string = '';
  icono_delete_opcional: string = '';
  color_delete_hex: string = '';
  title_delete_opcional: string = '';
  title_icono_edit_sin_accion: string = '';
  dropdown_options:Dropdown[] = null;
  dropdown_options_child:Dropdown[] = null;

  opacity_child_open:boolean = false; //opacidad a los otros <tr> cuando se muestra un hijo
  open_only_one_child:boolean = false;// solo permite abrir un hijo a la vez

  public ConfigureDefault(): void {
    this.ConfigureHeaders();
    this.ConfigureCombobox();
    this.ConfigureColumns();
    this.ConfigureXtra();
  }

  private ConfigureHeaders(): void {
    /*this.columns_headers_title =
      this.ConfigurationOptions.columns_headers_title ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.columns_headers_checkbox =
      this.ConfigurationOptions.columns_headers_checkbox || false;
    this.columns_headers_checkbox_event =
      this.ConfigurationOptions.columns_headers_checkbox_event ||
      this.ConfigurationOptions.columns.map((i) => false);
    this.columns_headers_radio =
      this.ConfigurationOptions.columns_headers_radio || false;
    this.columns_headers_radio_event =
      this.ConfigurationOptions.columns_headers_radio_event ||
      this.ConfigurationOptions.columns.map((i) => false);*/
  }

  private ConfigureCombobox(): void {
    this.combobox_show_array =
      this.ConfigurationOptions.combobox_show_array &&
      this.ConfigurationOptions.combobox_show_array.length > 0
        ? this.ConfigurationOptions.combobox_show_array
        : [];
  }

  private ConfigureColumns(): void {
    /*this.columns_context_menu =
      this.ConfigurationOptions.columns_context_menu ||
      this.ConfigurationOptions.columns.map((i) => false);
    this.columns_style =
      this.ConfigurationOptions.columns_style ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.columns_aline =
      this.ConfigurationOptions.columns_aline ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.columns_child_active =
      this.ConfigurationOptions.columns_child_active || false;
    this.columns_style_body =
      this.ConfigurationOptions.columns_style_body ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.columns_format_decimal =
      this.ConfigurationOptions.columns_format_decimal ||
      this.ConfigurationOptions.columns.map((i) => false);
    this.uppercase = this.ConfigurationOptions.uppercase ? this.ConfigurationOptions.uppercase || this.ConfigurationOptions.uppercase.map(i => false) : '';*/
  }

  private ConfigureXtra(): void {
    /*this.pipes =
      this.ConfigurationOptions.pipes ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.title_td =
      this.ConfigurationOptions.title_td ||
      this.ConfigurationOptions.columns.map((i) => "");
    this.width_columns = this.ConfigurationOptions.width_columns
      ? this.ConfigurationOptions.width_columns ||
      this.ConfigurationOptions.width_columns.map((i) => "")
      : "";
    this.wrap_column = this.ConfigurationOptions.wrap_column
      ? this.ConfigurationOptions.wrap_column ||
      this.ConfigurationOptions.wrap_column.map((i) => false)
      : "";
    this.width_columns = this.ConfigurationOptions.width_columns
      ? this.ConfigurationOptions.width_columns ||
      this.ConfigurationOptions.width_columns.map((i) => "")
      : "";
    this.mostrar_columns_excel = this.ConfigurationOptions.mostrar_columns_excel
      ? this.ConfigurationOptions.mostrar_columns_excel ||
      this.ConfigurationOptions.mostrar_columns_excel.map((item) => false)
      : "";
    this.mostrar_columns_pdf = this.ConfigurationOptions.mostrar_columns_pdf
      ? this.ConfigurationOptions.mostrar_columns_pdf ||
      this.ConfigurationOptions.mostrar_columns_pdf.map((item) => false)
      : "";*/
  }
}

export class ButtonsOptions {
  edit: boolean = false;
  delete: boolean = false;
  view: boolean = false;
  button_custom1: boolean = false;
  word: boolean = false;
  excel: boolean = false;
  stop: boolean = false;
  play: boolean = false;
  switch: boolean = false;
}

export class CustomButton {
  cb1: {
    reserved: boolean;
    class: string;
    title: string;
    icon: string;
  };
}

export class PaginationModel {
  offset_left: number = 0;
  offset_right: number = 0;
  number_records: number = 0;
  page: number = 0;
  page_end: number = 0;
}

interface ColumHeader {
  key: string;
  label: string;
  show: boolean;
  pipe?: string;
  classname?: string; // clases para el th
  classnamebody?: string;
}

interface Dropdown {
  label:string,
  iconsvg?:string,
  classname?:string,
  action:string,//nombre uniq para el evento
}