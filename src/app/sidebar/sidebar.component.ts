import { MenuItem, MenuConstants } from './MenuItem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  navlinkClicked=false;
  openedMenu=Number;
  selectedMenuItem=Number;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navItemClick(){
    this.navlinkClicked= !this.navlinkClicked;
  }

  onChildMenuItemClick(route,index){
    this.router.navigate([route]);
    this.selectedMenuItem=index
    
    
  }

  onMenuItemClick(index,route){
    // if(this.menu[index].route){
    //   this.openedMenu = index;

    // }
  if(this.openedMenu===index) this.openedMenu=null;
  else {
    this.openedMenu=index;
    this.selectedMenuItem=null;
  
  }

  }

  menu:Array<MenuItem>=[
    MenuConstants.ADMINISTRATION_CONSTANTS,
    MenuConstants.MANAGER_CONSTANTS,
    MenuConstants.EMPLOYEE_CONSTANTS
  ];

}
