export interface MenuItem {
    // id?: number;
    id?: any;
    label?: string;
    icon?: string;
    link?: string;
    subItems?: any;
    isTitle?: boolean;
    badge?: any;
    parentId?: number;
    isLayout?: boolean;
    showItems:boolean;
    collapsed?:boolean
}

export interface MenuConfiguracion {
    label:string,
    icon?:string,
    iconsvg?:string,
    expanded?:boolean
    subItems:subItems[],

}

interface subItems{
    label:string,
    link?:string,
    expanded?:boolean
    subItems?:subItems[],
    show?:boolean
}