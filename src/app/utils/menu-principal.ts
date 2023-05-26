import { MenuItem } from "./menu.interface";

export const MENU: MenuItem[] = [
  {
    id: '0',
    label: 'Inicio',
    icon: 'fas fa-home',
    link: '/dash',
    showItems:false,
    subItems: []
  },
  {
    id: '1',
    label: 'Contexto de la Organización',
    icon: 'fa-solid fa-building',
    //link: '/dash',
    showItems:true,
    collapsed:false,
    subItems: [
      {
        id: '11',
        label: 'Análisis del Contexto Interno y Externo',
        icon: 'bx-calendar',
        visible:true,
        link: 'analisis-del-contexto-interno-y-externo'
      },
      {
        id: '12',
        label: 'Análisis de Necesidades y Expectativas',
        icon: 'bx-calendar',
        visible:true,
        link: 'analisis-de-necesidades-y-expectativas'
      },
      {
        id: '12',
        label: 'Alcance del Sistema de Gestión de SST',
        icon: 'bx-calendar',
        visible:true,
        link: 'alcance-del-sistema-de-gestion-de-sst'
      },
      {
        id: '13',
        label: 'Estructura del Sistema de Gestión de SST',
        icon: 'bx-calendar',
        visible:true,
        link: 'estructura-del-sistema-de-gestion-de-sst'
      },
    ]
  },
  {
    id: '2',
    label: 'Liderazgo y Compromiso',
    icon: 'fa-solid  fa-child-reaching',
    //link: '/dash',
    showItems:true,
    collapsed:false,
    subItems: [
      {
        id: '11',
        label: 'Liderazgo, Compromiso y Responsabilidad',
        icon: 'bx-calendar',
        visible:true,
        link: 'liderazgo-y-compromiso/liderazgo-compromiso-y-responsabilidad'
      },
      {
        id: '12',
        label: 'Politica(s) de SST',
        icon: 'bx-calendar',
        visible:true,
        link: 'liderazgo-y-compromiso/politicas-de-sst'
      },
    ]
  },
  {
      id: '3',
      label: 'Organización y Recursos',
      icon: 'fas fa-thin fa-sitemap',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '11',
          label: 'Servicios',
          icon: 'bx-calendar',
          visible:true,
          link: 'servicios'
        },
        {
          id: '12',
          label: 'Organigrama',
          icon: 'bx-calendar',
          visible:true,
          link: 'organigrama'
        },
        {
          id: '12',
          label: 'Grupo de Trabajo',
          icon: 'bx-calendar',
          visible:true,
          link: 'grupo-trabajo'
        },
        {
          id: '13',
          label: 'Trabajadores',
          icon: 'bx-calendar',
          visible:true,
          link: 'trabajadores'
        },
        {
          id: '14',
          label: 'Recursos',
          icon: 'bx-calendar',
          visible:true,
          link: 'recursos'
        },
        {
          id: '15',
          label: 'Actividades',
          icon: 'bx-calendar',
          visible:true,
          link: 'actividades'
        }
      ]
    },
    {
      id: '4',
      label: 'Requisitos Legales y Otros Requisitos de SSO',
      icon: 'fa-solid fa-triangle-exclamation',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '21',
          label: 'Requisitos Legales',
          icon: 'bx-calendar',
          visible:true,
          link: 'requisitos-legales-otros-requisitos-de-sso/requisitos-legales'
        },
        {
          id: '22',
          label: 'Otros Requisitos',
          icon: 'bx-calendar',
          visible:true,
          link: 'requisitos-legales-otros-requisitos-de-sso/otros-requisitos'
        }
      ]
    },

    {
      id: '5',
      label: 'Gestor de Riesgos',
      icon: 'fa-solid fa-triangle-exclamation',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '31',
          label: 'Matriz IPER',
          icon: 'bx-calendar',
          visible:true,
          link: 'matriz-iper'
        },
        {
          id: '32',
          label: 'Riesgos Criticos',
          icon: 'bx-calendar',
          visible:true,
          link: 'riesgos-criticos'
        },
      ]
    },
    {
      id: '6',
      label: 'Gestor de Documentos',
      icon: 'fa-solid fa-file',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '23',
          label: 'Documentos',
          icon: 'bx-calendar',
          visible:true,
          link: 'gestor-de-documentos/documentos'
        },
        {
          id: '24',
          label: 'Otros Documentos',
          icon: 'bx-calendar',
          visible:true,
          link: 'gestor-de-documentos/otros-documentos'
        }
      ]
    },
    {
      id: '7',
      label: 'Planificación',
      icon: 'fa-solid fa-calendar-minus',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '41',
          label: 'Planificación Estrategica',
          icon: 'bx-calendar',
          visible:true,
          link: 'planificacion/planificacion-estrategica'
        },
        {
          id: '42',
          label: 'Planificación Operativa',
          icon: 'bx-calendar',
          visible:true,
          link: 'planificacion/planificacion-operativa'
        },

      ]
    },
    {
      id: '5',
      label: 'Gestor Operacional',
      icon: 'fa-solid fa-calendar-minus',
      //link: '/dash',
      showItems:true,
      collapsed:false,
      subItems: [
        {
          id: '41',
          label: 'Inspección Periódica',
          icon: 'bx-calendar',
          visible:true,
          link: 'gestor-operacional/inspeccion-periodica'
        }
      ]
    },
    /* {
      id: '3',
      label: 'Organizacion y Recursos',
      icon: 'fa-regular fa-calendar-days',
      link: '/dash',
      subItems: [
      ]
    },
    {
      id: '4',
      label: 'Gestor de Riesgos de SSO',
      icon: 'fas fa-boxes',
      link: '/dash',
      subItems: [

      ]
    },
    {
      id: '5',
      label: 'Gestor de Requisitos Legales y Otros Requisitos de SSO',
      icon: 'fas fa-share-alt',
      subItems: [

      ]
    },
    {
      id: '6',
      label: 'Planificación',
      icon: 'fas fa-share-alt',
      link: '/gestionplanesaccionmejora',
      subItems: [

      ]
    },
    {
      id: '7',
      label: 'Formación, Entrenamiento & Toma de Conciencia',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '8',
      label: 'Comunicación, Participación y Consulta',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '9',
      label: 'Gestor de Documentos',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '10',
      label: 'Gestor de Cambios',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '11',
      label: 'Gestor de Compras, Proveedores y Contratistas',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '12',
      label: 'Gestor de EPPs',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },
    {
      id: '13',
      label: 'Preparación y Respuesta ante Emergencias',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '14',
      label: 'Gestor Operacional',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '15',
      label: 'Gestor de Incidentes y Accidentes',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '16',
      label: 'Gestor de no Conformidades y Acciones Correctivas',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '17',
      label: 'Evaluación del Desempeño, Análisis y Mejora',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '18',
      label: 'Gestor de Éxamenes Médicos Ocupacionales',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '19',
      label: 'Vigilancia Médica Específica',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '20',
      label: 'Higiene Ocupacional y Egronomía',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    },

    {
      id: '21',
      label: 'Programa de Salud Mental y Riesgos Psicosociales',
      icon: 'fa-solid fa-truck-medical',
      link: '/vigilanciamedica',
      subItems: []
    }, */





  ]
