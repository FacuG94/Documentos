import { OpcionesEnLista } from "./utils.interface";

export class ListasSistema {
    genero: OpcionesEnLista[] = [
        { codigo: 'F', nombre: 'Femenino' },
        { codigo: 'M', nombre: 'Masculino' },
        { codigo: 'ND' , nombre: 'No Definido' }
    ];

    sucursalrh: OpcionesEnLista[] = [
        { codigo: 1, nombre: 'Lima' },
        { codigo: 2, nombre: 'Chimbote' },
        { codigo: 3, nombre: 'Fortaleza' }  ,
        { codigo: 4, nombre: 'Huarmey' }  ,
        { codigo: 5, nombre: 'Casma' }  ,
        { codigo: 6, nombre: 'Virú' }
    ];

    vigencias: OpcionesEnLista[] = [
        { codigo: 1, nombre: 'Vigente' },
        { codigo: 2, nombre: 'Derogado' },
        { codigo: 3, nombre: 'Suspendido' }
    ];

    vigencias_lista_verificacion: OpcionesEnLista[] = [
        { codigo: 1, nombre: 'Vigente' },
        { codigo: 2, nombre: 'Pendiente' },
        { codigo: 3, nombre: 'Obsoleto' }
    ];

    tipo_control: OpcionesEnLista[] = [
        { codigo: 'Preventivo', nombre: 'Preventivo' },
        { codigo: 'Mitigador', nombre: 'Mitigador' },
        { codigo: 'Ambos', nombre: 'Ambos' }
    ];

    especialidades_control: any[] = [
        {codigo:'Seguridad en el Trabajo', nombre:'Seguridad en el Trabajo'},
        {codigo:'Salud Ocupacional', nombre:'Salud Ocupacional'},
        {codigo:'Higiene Ocupacional', nombre:'Higiene Ocupacional'},
        {codigo:'Ergonimía', nombre:'Ergonimía'},
      ];

      tipo_empresa: OpcionesEnLista[] = [
        { codigo: 'AUNOR', nombre: 'Aunor' },
        { codigo: 'CONTRATISTA', nombre: 'Contratistas/Proveedor' },
        { codigo: 'CLINICA', nombre: 'Clínica' }
    ];

    actividades_glv: OpcionesEnLista[] = [
        { codigo: 'Auditoría', nombre: 'Auditoría' }  ,
        { codigo: 'Inspección', nombre: 'Inspección' },
        { codigo: 'Verificación de control', nombre: 'Verificación de control' },
        { codigo: 'Verificación de control crítico', nombre: 'Verificación de control crítico' },
        { codigo: 'Observación', nombre: 'Observación' }
    ];

    enfoque_lv: OpcionesEnLista[] = [
      { codigo: 'EMPRESAS', nombre: 'Empresas' },
      { codigo: 'GRUPOS', nombre: 'Grupos' },
      { codigo: 'PERSONAS', nombre: 'Personas' },
      { codigo: 'RECURSOS', nombre: 'Recursos' },

    ];


    pperdida: OpcionesEnLista[] = [
        { codigo: 'BAJO', nombre: 'BAJO' },
        { codigo: 'MODERADO', nombre: 'MODERADO' },
        { codigo: 'ALTO', nombre: 'ALTO' },
        { codigo: 'MUY_ALTO', nombre: 'MUY ALTO' }
    ];


    ddocumento: OpcionesEnLista[] = [
        { codigo: 'Documento1', nombre: 'Documento1' },
        { codigo: 'Documento2', nombre: 'Documento2' },
        { codigo: 'Documento3', nombre: 'Documento3' },
        { codigo: 'Documento4', nombre: 'Documento4' }
    ];

    recursos_lv: OpcionesEnLista[] = [
        { codigo: 'VE', nombre: 'Vehiculos' },
        { codigo: 'EP', nombre: 'Equipos Pesados' },
        { codigo: 'EM', nombre: 'Equipos Menores' },
        { codigo: 'AL', nombre: 'Accesorios de levante' } ,
        { codigo: 'HM', nombre: 'Herramientas Manuales' },
        { codigo: 'EE', nombre: 'Equipamiento de emergencia' },
        { codigo: 'TA', nombre: 'Elementos para Trabajos en Altura' },
        { codigo: 'IN', nombre: 'Instalaciones' }
    ];

    listado_tipo_tarea: OpcionesEnLista[] = [
        { codigo:'RUT', nombre: 'Rutinaria'},
        { codigo:'NRU', nombre: 'No Rutinaria'},
        { codigo:'EME', nombre: 'Emergencia'}
      ]

      listado_estados: OpcionesEnLista[] = [
        { codigo:0, nombre: 'Inactivo'},
        { codigo:1, nombre: 'Activo'},
        { codigo:null, nombre: 'Todos'}
      ]

}
