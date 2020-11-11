export interface MenuItem{
    title: string;
    icon?: string;
    route?: string;
    tags?: string;
    children?: Array<MenuItem>;
    link?: string;
};


export class MenuConstants{
   public static readonly SPACER: MenuItem={
       title: ''
   };

   public static readonly ADMINISTRATION_CONSTANTS: MenuItem = {
    title:'Administration',
    icon: 'fa fa-cogs',
    children: [
        {title: 'User Create', route:'/AdminUserCreate'},
        {title: 'Project Create', route:''}
    ]
    }

    public static readonly MANAGER_CONSTANTS: MenuItem = {
        title:'Manager',
        icon: 'fa fa-users',
        children: [
            {title: 'Assign Task', route:''},
            {title: 'Project Status', route:''}
        ]
    }


    public static readonly EMPLOYEE_CONSTANTS: MenuItem = {
        title:'Employee',
        icon: 'fa fa-briefcase',
        children: [
            {title: 'Pending Tasks', route:''},
            {title: 'Archive', route:''}
        ]
    }


}

