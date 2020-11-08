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
    icon: 'fas fa-user-nurse',
    children: [
        {title: 'User Create', route:'/WelcomePage'},
        {title: 'Project Create', route:''}
    ]
    }

    public static readonly MANAGER_CONSTANTS: MenuItem = {
        title:'Manager',
        icon: 'fa-address-book',
        children: [
            {title: 'Assign Task', route:''},
            {title: 'Project Status', route:''}
        ]
    }


    public static readonly EMPLOYEE_CONSTANTS: MenuItem = {
        title:'Employee',
        icon: 'fa-address-book',
        children: [
            {title: 'Pending Tasks', route:''},
            {title: 'Archive', route:''}
        ]
    }


}

