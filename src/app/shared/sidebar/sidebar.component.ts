import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `li
    {cursor: pointer;
     color : blue;
     font-family: courier;
     font-size: 120%;
     border: 2px solid powderblue;
     padding: 30px;}
    `
  ]
  //Pa la manita 
})
export class SidebarComponent  {



  constructor() { }

  

}
